// app/privacidade/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import ChevronLeftIcon from "@/icons/chevron-left.svg"; 

export default function PrivacyPolicyPage() {
  const [platformName] = useState("Nux");
  const [contactEmail] = useState("fale.conosco@nux.com");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Voltar
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Bem-vindo à Política de Privacidade do <strong>{platformName}</strong>. Sua privacidade é de extrema importância para nós. Este documento descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais e os dados do seu estabelecimento ao utilizar nossa plataforma de gerenciamento para estabelecimentos gastronômicos.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Informações que Coletamos
            </h2>
            <p>
              Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
            </p>
            <ul>
              <li>
                <strong>Informações de Cadastro:</strong> Quando você cria uma conta, coletamos seu nome, sobrenome, endereço de e-mail e senha (criptografada).
              </li>
              <li>
                <strong>Informações do Estabelecimento:</strong> Para utilizar o sistema, você fornecerá dados sobre seu negócio, como nome do restaurante, endereço, CNPJ, telefone, cardápios, lista de produtos e informações de estoque.
              </li>
              <li>
                <strong>Dados de Transações:</strong> Coletamos informações sobre pedidos, vendas, pagamentos e dados de clientes finais que são processados através da nossa plataforma. Isso pode incluir itens pedidos, valores e horários.
              </li>
              <li>
                <strong>Informações de Uso:</strong> Registramos como você interage com nossa plataforma, incluindo páginas acessadas, funcionalidades utilizadas, horários de acesso e dados do seu dispositivo (navegador, endereço IP, sistema operacional).
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Como Usamos Suas Informações
            </h2>
            <p>
              As informações coletadas são utilizadas para os seguintes propósitos:
            </p>
            <ul>
              <li>
                <strong>Fornecer e Gerenciar o Serviço:</strong> Para operar a plataforma, autenticar seu acesso, processar suas transações e fornecer suporte ao cliente.
              </li>
              <li>
                <strong>Melhorar a Plataforma:</strong> Analisamos dados de uso para entender as necessidades dos nossos usuários, corrigir problemas e desenvolver novas funcionalidades.
              </li>
              <li>
                <strong>Comunicação:</strong> Para enviar notificações importantes sobre sua conta, atualizações de serviço, alterações em nossos termos e políticas, e comunicações de marketing (das quais você pode optar por sair).
              </li>
              <li>
                <strong>Segurança e Conformidade:</strong> Para proteger nossa plataforma contra fraudes e abusos, e para cumprir com obrigações legais e regulatórias.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Compartilhamento de Informações
            </h2>
            <p>
              O <strong>{platformName}</strong> não vende suas informações pessoais. Podemos compartilhar seus dados nas seguintes situações:
            </p>
            <ul>
              <li>
                <strong>Com Provedores de Serviço:</strong> Compartilhamos informações com terceiros que nos auxiliam a operar, como provedores de hospedagem em nuvem (ex: AWS, Google Cloud), processadores de pagamento e ferramentas de análise. Esses provedores têm acesso limitado às suas informações e são contratualmente obrigados a protegê-las.
              </li>
              <li>
                <strong>Por Obrigação Legal:</strong> Podemos divulgar suas informações se exigido por lei, intimação ou outro processo legal, ou se acreditarmos de boa-fé que a divulgação é necessária para proteger nossos direitos, sua segurança ou a segurança de outros.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Segurança dos Dados
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui o uso de criptografia (HTTPS), firewalls, controle de acesso restrito e monitoramento contínuo de nossos sistemas.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. Seus Direitos e Escolhas
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis, você tem o direito de:
            </p>
            <ul>
              <li><strong>Acessar:</strong> Solicitar uma cópia das informações pessoais que temos sobre você.</li>
              <li><strong>Corrigir:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Excluir:</strong> Solicitar a exclusão de suas informações pessoais, exceto nos casos em que a lei nos permite ou exige a retenção.</li>
              <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor de serviço.</li>
            </ul>
            <p>
              Você pode gerenciar as informações da sua conta diretamente no painel de configurações da plataforma. Para outras solicitações, entre em contato conosco.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Retenção de Dados
            </h2>
            <p>
              Reteremos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei (por exemplo, para fins fiscais e contábeis).
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. Alterações a Esta Política de Privacidade
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos você sobre quaisquer alterações significativas publicando a nova política nesta página e, se aplicável, por e-mail. Recomendamos que você revise esta página regularmente.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              8. Contato
            </h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre nossas práticas, entre em contato conosco através do e-mail: <a href="mailto:privacidade@seusite.com" className="text-blue-600 dark:text-blue-400 hover:underline">{contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}