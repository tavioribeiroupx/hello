"use client";

import Link from "next/link";
import { useState } from "react";
import ChevronLeftIcon from "@/icons/chevron-left.svg"; 

export default function TermsOfUsePage() {
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
            Termos de Uso
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Bem-vindo ao <strong>{platformName}</strong>! Estes Termos de Uso  governam seu acesso e uso de nossa plataforma de gerenciamento para estabelecimentos gastronômicos. Ao criar uma conta ou usar nossos serviços, você concorda em cumprir estes Termos.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar a plataforma <strong>{platformName}</strong>, você confirma que leu, entendeu e concorda em estar vinculado a estes Termos e à nossa <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Política de Privacidade</Link>, que é incorporada aqui por referência. Se você não concorda com estes Termos, não deve usar nossos serviços.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Descrição do Serviço
            </h2>
            <p>
              O <strong>{platformName}</strong> oferece uma plataforma de software como serviço (SaaS) projetada para ajudar estabelecimentos gastronômicos a gerenciar suas operações, incluindo, mas não se limitando a, gestão de pedidos, controle de estoque, cardápios e relatórios de vendas.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Sua Conta e Responsabilidades
            </h2>
            <ul>
              <li>
                <strong>Elegibilidade:</strong> Para criar uma conta, você deve ser maior de 18 anos e ter autoridade legal para vincular seu estabelecimento a estes Termos.
              </li>
              <li>
                <strong>Segurança da Conta:</strong> Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta. Notifique-nos imediatamente sobre qualquer uso não autorizado.
              </li>
              <li>
                <strong>Informações Precisas:</strong> Você concorda em fornecer informações verdadeiras, precisas e completas durante o registro e em mantê-las atualizadas.
              </li>
              <li>
                <strong>Uso Aceitável:</strong> Você concorda em não usar a plataforma para fins ilegais, fraudulentos ou não autorizados. Você não deve violar nenhuma lei em sua jurisdição ao usar o serviço.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Propriedade Intelectual
            </h2>
            <p>
              A plataforma <strong>{platformName}</strong>, incluindo seu design, software, código-fonte, logotipos e conteúdo (excluindo os dados inseridos por você), é de propriedade exclusiva do <strong>{platformName}</strong> e de seus licenciadores, protegida por leis de direitos autorais e propriedade intelectual. Você não tem permissão para copiar, modificar, distribuir ou criar obras derivadas baseadas em nosso serviço sem nossa permissão expressa por escrito.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. Conteúdo do Usuário
            </h2>
            <p>
              Você retém todos os direitos de propriedade sobre os dados que insere na plataforma (como informações do seu estabelecimento, cardápios e dados de vendas). Ao usar o serviço, você nos concede uma licença mundial, não exclusiva e isenta de royalties para usar, hospedar, armazenar e analisar esses dados com o objetivo de fornecer e melhorar nossos serviços.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p>
              O <strong>{platformName}</strong> é fornecido &quot;como está&quot;. Na máxima extensão permitida por lei, não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais (incluindo perda de lucros, dados ou interrupção de negócios) decorrentes do uso ou da incapacidade de usar nossa plataforma, mesmo que tenhamos sido avisados da possibilidade de tais danos.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. Rescisão
            </h2>
            <p>
              Nós nos reservamos o direito de suspender ou encerrar sua conta e o acesso ao serviço a nosso critério, sem aviso prévio, por qualquer violação destes Termos. Você pode cancelar sua conta a qualquer momento através das configurações da plataforma ou entrando em contato com o suporte.
            </p>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              8. Alterações aos Termos
            </h2>
            <p>
              Podemos modificar estes Termos de tempos em tempos. Notificaremos você sobre alterações significativas publicando os novos Termos nesta página. Seu uso continuado do serviço após a data de vigência das alterações constitui sua aceitação dos Termos revisados.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              9. Contato
            </h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href={`mailto:${contactEmail}`} className="text-blue-600 dark:text-blue-400 hover:underline">{contactEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}