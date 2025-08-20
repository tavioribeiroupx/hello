# Estágio 1: Instalação de dependências
# Este estágio foca em instalar as dependências de forma eficiente,
# aproveitando o cache do Docker. Ele só será reexecutado se os
# arquivos de dependências (package.json, pnpm-lock.yaml) mudarem.
FROM node:18-alpine AS deps
# Instala o pnpm
RUN npm install -g pnpm
WORKDIR /app

# Copia os arquivos de definição de projeto e dependências
COPY package.json pnpm-lock.yaml* ./

# Instala as dependências usando o lockfile para garantir consistência.
# Certifique-se de que o arquivo 'pnpm-lock.yaml' existe e está
# no mesmo diretório do seu Dockerfile.
RUN pnpm install --frozen-lockfile


# Estágio 2: Build de Produção
# Este estágio utiliza as dependências do estágio anterior para
# construir a aplicação.
FROM node:18-alpine AS builder
WORKDIR /app
# Copia as dependências já instaladas do estágio 'deps'
COPY --from=deps /app/node_modules ./node_modules
# Copia o restante do código fonte da aplicação
COPY . .

# Executa o comando de build da sua aplicação (ex: Next.js)
RUN pnpm build


# Estágio 3: Imagem de Produção Final
# Esta é a imagem final, otimizada para ser menor e mais segura.
# Contém apenas os artefatos necessários para executar a aplicação.
FROM node:18-alpine AS production
WORKDIR /app

# Copia os artefatos de build do estágio 'builder'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Define a porta que a aplicação irá expor
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["pnpm", "start"]

# O estágio de desenvolvimento foi removido do build final para simplificar,
# já que ele não é usado para criar a imagem de produção.
# Se você precisa de um alvo de build específico para desenvolvimento,
# pode usar: docker build --target development -t hello_world:dev .
# E o estágio seria:
#
# FROM node:18-alpine AS development
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# EXPOSE 3000
# CMD ["pnpm", "dev"]