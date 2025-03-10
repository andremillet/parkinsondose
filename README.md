# Aplicativo de Sugestão de Dosagem para Parkinson

## Descrição
O **Aplicativo de Sugestão de Dosagem para Parkinson** é uma ferramenta web desenvolvida para auxiliar médicos no manejo da doença de Parkinson. Ele permite calcular escores parciais da Escala Unificada de Avaliação da Doença de Parkinson (UPDRS) e sugere ajustes na dosagem de levodopa com base em dados inseridos, como doses diárias de medicamentos e sintomas motores.

**Atenção**: Este aplicativo considera apenas uma parte da UPDRS (Parte III - Exame Motor simplificado e Parte IV - Discinesia parcial). Ele é projetado exclusivamente para uso por profissionais de saúde qualificados e não deve ser utilizado por pacientes ou cuidadores sem supervisão médica.

## Funcionalidades
- **Entrada de Medicamentos**: Permite inserir doses diárias totais (em mg) de levodopa, carbidopa, benserazida, rasagilina, pramipexol e biperideno.
- **Calculadora UPDRS**:
  - **Parte III (Exame Motor)**: Calcula um escore parcial baseado em 12 itens selecionados (fala, expressão facial, tremor em repouso, rigidez, etc.), com pontuações de 0 a 4 por item, ajustadas por multiplicadores para médias (ex.: tremor × 5).
  - **Parte IV (Discinesia)**: Calcula um escore parcial com base em dois itens (duração e incapacidade da discinesia), com pontuações de 0 a 4 cada.
- **Sugestão de Dosagem**: Fornece recomendações baseadas em:
  - Escore motor baixo (<10) e discinesia baixa (<6): Dosagem adequada.
  - Escore motor alto (≥20) e dose <600 mg/dia: Sugere aumento.
  - Discinesia alta (≥6) e escore motor baixo: Sugere redução.
  - Escore motor alto, dose ≥600 mg/dia, sem discinesia: Sugere aumento até 800 mg/dia, avaliação de dieta e terapias avançadas (ex.: LCIG, DBS).

## Limitações
- **UPDRS Parcial**: O aplicativo utiliza uma versão simplificada da UPDRS:
  - Parte III: Inclui apenas 12 itens representativos (máximo 108 pontos), em vez dos 27 itens completos.
  - Parte IV: Limita-se a discinesia (máximo 8 pontos), excluindo flutuações motoras e outros itens.
- **Foco em Levodopa**: As sugestões concentram-se na levodopa, sem ajustes detalhados para outros medicamentos.
- **Uso Restrito**: Desenvolvido para médicos. O uso por não profissionais é desencorajado e pode ser perigoso.

## Requisitos
- Navegador web moderno (ex.: Chrome, Firefox).
- Arquivos necessários: `index.html`, `styles.css`, `script.js`.

## Instalação e Uso
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Insira as doses diárias totais de medicamentos.
4. Selecione as pontuações da UPDRS usando os botões de rádio.
5. Clique em "Obter Sugestão" para visualizar a recomendação.

## Exemplo de Saída

Sugestão
Dose de Levodopa: 650 mg/dia
UPDRS Motor (on): 56
UPDRS Discinesia: 0
Sugestão: Ajuste da dosagem requer análise detalhada.
Detalhes: Os sintomas permanecem altos (UPDRS Motor 56) apesar de uma dose adequada ou no limite superior (650 mg/dia) e sem discinesia. Pode-se considerar:
Aumentar a dose de levodopa até 800 mg/dia, com atenção a efeitos colaterais significativos (ex.: náuseas, hipotensão).

Avaliar fatores como dieta (ex.: alta ingestão de proteínas) que possam interferir na absorção da levodopa.

Em casos refratários, considerar terapias avançadas, como bomba de levodopa-carbidopa intestinal (LCIG) ou estimulação cerebral profunda (DBS), conforme idade e estado geral do paciente.

## Restrições de Uso
- **Uso Médico Exclusivo**: Este aplicativo foi projetado para ser uma ferramenta de suporte para médicos. Seu uso é restrito a profissionais de saúde qualificados. Não deve ser utilizado por pacientes, cuidadores ou outros indivíduos sem formação médica, devido ao risco de interpretação inadequada ou ajustes perigosos na medicação.
- **Responsabilidade do Usuário**: Embora licenciado sob a MIT, recomendo fortemente que apenas médicos utilizem esta ferramenta, conforme os termos de uso indicados.

## Licença
Este projeto é licenciado sob a **Licença MIT**:
Copyright (c) 2025 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


**Nota sobre Restrição**: Embora a Licença MIT permita o uso irrestrito do código, reitero que este aplicativo é destinado exclusivamente ao uso por médicos. Essa restrição é uma recomendação ética e prática, não uma limitação legal imposta pela licença. Usuários são responsáveis por aderir a essa orientação.

## Futuras Melhorias
- Integração com arquivo JSON para importação automática de prescrições.
- Expansão para incluir todos os itens da UPDRS (Partes I-IV completas).
- Personalização com base em idade ou comorbidades do paciente.



