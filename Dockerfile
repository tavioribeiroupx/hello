# Estágio 1: Instalação de dependências (Base)
# Este estágio é reutilizado por todos os outros para evitar a reinstalação de pacotes.
FROM node:18-alpine AS deps
# Instala o pnpm
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
# Instala as dependências. Se o pnpm-lock.yaml existir, ele será usado.
RUN pnpm install

# Estágio 2: Ambiente de Desenvolvimento (Ativo)
# Otimizado para desenvolvimento local, com hot-reloading.
FROM node:18-alpine AS development
WORKDIR /app
# Copia as dependências já instaladas do estágio 'deps'
COPY --from=deps /app/node_modules ./node_modules
# Copia o restante do código da aplicação
COPY . .
# Expõe a porta que o servidor de desenvolvimento usará
EXPOSE 3000
# Comando para iniciar o servidor de desenvolvimento
CMD ["pnpm", "dev"]


# --------------------------------------------------------------------
# SEÇÕES COMENTADAS PARA HOMOLOGAÇÃO E PRODUÇÃO
# Para usar um desses estágios, utilize o comando:
# docker build --target <nome_do_estagio> -t <sua_imagem> .
# Exemplo para produção:
# docker build --target production -t meu-app:latest .
# --------------------------------------------------------------------


# Estágio 3: Build (Comum para Homologação e Produção)
# Este estágio compila o projeto Next.js para produção.
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# # Opcional: Você pode definir argumentos de build aqui, se necessário
# # ARG NEXT_PUBLIC_API_URL
# # ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
# RUN pnpm build


# Estágio 4: Imagem de Homologação (Homol)
# Gera uma imagem otimizada, similar à de produção, para o ambiente de testes/homologação.
# FROM node:18-alpine AS homol
# WORKDIR /app
# # Copia apenas os artefatos necessários do estágio de build
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# # Expõe a porta da aplicação
# EXPOSE 3000
# # Comando para iniciar o servidor de produção
# # Em um cenário real, você poderia ter um comando diferente ou carregar variáveis de ambiente específicas para homol.
# CMD ["pnpm", "start"]


# Estágio 5: Imagem de Produção Final (Prod)
# Gera a imagem final, leve e otimizada para ser executada em produção.
# FROM node:18-alpine AS production
# WORKDIR /app
# # Copia os artefatos do build e as dependências de produção
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# # Expõe a porta da aplicação
# EXPOSE 3000
# # Comando para iniciar o servidor de produção
# CMD ["pnpm", "start"]