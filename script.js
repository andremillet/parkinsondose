document.getElementById('dosageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter valores das doses
    const levodopa = parseFloat(document.getElementById('levodopa').value) || 0;
    const carbidopa = parseFloat(document.getElementById('carbidopa').value) || 0;
    const benserazide = parseFloat(document.getElementById('benserazide').value) || 0;
    const rasagiline = parseFloat(document.getElementById('rasagiline').value) || 0;
    const pramipexole = parseFloat(document.getElementById('pramipexole').value) || 0;
    const biperiden = parseFloat(document.getElementById('biperiden').value) || 0;

    // Calcular UPDRS Parte III (Motor)
    const motorSpeech = parseInt(document.querySelector('input[name="motorSpeech"]:checked').value);
    const motorFace = parseInt(document.querySelector('input[name="motorFace"]:checked').value);
    const motorTremor = parseInt(document.querySelector('input[name="motorTremor"]:checked').value);
    const motorRigidity = parseInt(document.querySelector('input[name="motorRigidity"]:checked').value);
    const motorFingers = parseInt(document.querySelector('input[name="motorFingers"]:checked').value);
    const motorHands = parseInt(document.querySelector('input[name="motorHands"]:checked').value);
    const motorLegs = parseInt(document.querySelector('input[name="motorLegs"]:checked').value);
    const motorChair = parseInt(document.querySelector('input[name="motorChair"]:checked').value);
    const motorPosture = parseInt(document.querySelector('input[name="motorPosture"]:checked').value);
    const motorGait = parseInt(document.querySelector('input[name="motorGait"]:checked').value);
    const motorStability = parseInt(document.querySelector('input[name="motorStability"]:checked').value);
    const motorBradykinesia = parseInt(document.querySelector('input[name="motorBradykinesia"]:checked').value);

    const updrsMotor = (
        motorSpeech +
        motorFace +
        (motorTremor * 5) +
        (motorRigidity * 5) +
        (motorFingers * 2) +
        (motorHands * 2) +
        (motorLegs * 2) +
        motorChair +
        motorPosture +
        motorGait +
        motorStability +
        motorBradykinesia
    );

    // Calcular UPDRS Parte IV (Discinesia)
    const dyskDuration = parseInt(document.querySelector('input[name="dyskDuration"]:checked').value);
    const dyskDisability = parseInt(document.querySelector('input[name="dyskDisability"]:checked').value);
    const updrsDyskinesia = dyskDuration + dyskDisability;

    // Atualizar totais na interface
    document.getElementById('motorTotal').textContent = updrsMotor;
    document.getElementById('dyskTotal').textContent = updrsDyskinesia;

    // Definir limites com base em pesquisas
    const motorThresholdLow = 10;  // Sintomas leves
    const motorThresholdHigh = 20; // Sintomas intensos
    const dyskinesiaThreshold = 6;  // Discinesia significativa
    const levodopaTypicalMax = 600; // Dose diária máxima típica em mg
    const levodopaUpperLimit = 800; // Limite superior sugerido

    // Lógica de sugestão
    let sugestao = '';
    let ajuste = '';

    if (updrsMotor < motorThresholdLow && updrsDyskinesia < dyskinesiaThreshold) {
        sugestao = 'A dosagem parece estar adequada.';
        ajuste = 'O controle atual está bom, com efeitos colaterais mínimos.';
    } else if (updrsMotor >= motorThresholdHigh && levodopa < levodopaTypicalMax) {
        sugestao = 'Considere aumentar a dose de levodopa.';
        ajuste = 'Os sintomas não estão bem controlados, e a dose está abaixo do máximo típico (600 mg/dia). Um aumento de 50-100 mg/dia pode ser considerado.';
    } else if (updrsDyskinesia >= dyskinesiaThreshold && updrsMotor <= motorThresholdLow) {
        sugestao = 'Considere reduzir a dose de levodopa.';
        ajuste = 'A discinesia é significativa apesar do bom controle dos sintomas. Uma redução de 50-100 mg/dia pode ajudar.';
    } else if (updrsMotor >= motorThresholdHigh && levodopa >= levodopaTypicalMax && updrsDyskinesia < dyskinesiaThreshold) {
        sugestao = 'Ajuste da dosagem requer análise detalhada.';
        ajuste = `Os sintomas permanecem altos (UPDRS Motor ${updrsMotor}) apesar de uma dose adequada ou no limite superior (${levodopa} mg/dia) e sem discinesia. Pode-se considerar:\n
        1. Aumentar a dose de levodopa até 800 mg/dia, com atenção a efeitos colaterais significativos (ex.: náuseas, hipotensão).\n
        2. Avaliar fatores como dieta (ex.: alta ingestão de proteínas) que possam interferir na absorção da levodopa.\n
        3. Em casos refratários, considerar terapias avançadas, como bomba de levodopa-carbidopa intestinal (LCIG) ou estimulação cerebral profunda (DBS), conforme idade e estado geral do paciente.`;
    } else {
        sugestao = 'Pode ser necessário ajustar a dosagem.';
        ajuste = 'O controle misto dos sintomas e efeitos colaterais sugere uma abordagem personalizada. Considere referenciar para um espécialista em Transtornos do Movimento';
    }

    // Exibir resultado
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Sugestão</h3>
        <p><strong>Dose de Levodopa:</strong> ${levodopa} mg/dia</p>
        <p><strong>UPDRS Motor (on):</strong> ${updrsMotor}</p>
        <p><strong>UPDRS Discinesia:</strong> ${updrsDyskinesia}</p>
        <p><strong>Sugestão:</strong> ${sugestao}</p>
        <p><strong>Detalhes:</strong> ${ajuste}</p>
        <p><em>Sempre consulte um médico antes de ajustar a medicação.</em></p>
    `;
});

// Atualizar totais dinamicamente enquanto o usuário seleciona
const motorInputs = [
    'motorSpeech', 'motorFace', 'motorTremor', 'motorRigidity', 'motorFingers',
    'motorHands', 'motorLegs', 'motorChair', 'motorPosture', 'motorGait',
    'motorStability', 'motorBradykinesia'
];
const dyskInputs = ['dyskDuration', 'dyskDisability'];

motorInputs.forEach(name => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
        input.addEventListener('change', updateMotorTotal);
    });
});
dyskInputs.forEach(name => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
        input.addEventListener('change', updateDyskTotal);
    });
});

function updateMotorTotal() {
    const motorSpeech = document.querySelector('input[name="motorSpeech"]:checked') ? parseInt(document.querySelector('input[name="motorSpeech"]:checked').value) : 0;
    const motorFace = document.querySelector('input[name="motorFace"]:checked') ? parseInt(document.querySelector('input[name="motorFace"]:checked').value) : 0;
    const motorTremor = document.querySelector('input[name="motorTremor"]:checked') ? parseInt(document.querySelector('input[name="motorTremor"]:checked').value) : 0;
    const motorRigidity = document.querySelector('input[name="motorRigidity"]:checked') ? parseInt(document.querySelector('input[name="motorRigidity"]:checked').value) : 0;
    const motorFingers = document.querySelector('input[name="motorFingers"]:checked') ? parseInt(document.querySelector('input[name="motorFingers"]:checked').value) : 0;
    const motorHands = document.querySelector('input[name="motorHands"]:checked') ? parseInt(document.querySelector('input[name="motorHands"]:checked').value) : 0;
    const motorLegs = document.querySelector('input[name="motorLegs"]:checked') ? parseInt(document.querySelector('input[name="motorLegs"]:checked').value) : 0;
    const motorChair = document.querySelector('input[name="motorChair"]:checked') ? parseInt(document.querySelector('input[name="motorChair"]:checked').value) : 0;
    const motorPosture = document.querySelector('input[name="motorPosture"]:checked') ? parseInt(document.querySelector('input[name="motorPosture"]:checked').value) : 0;
    const motorGait = document.querySelector('input[name="motorGait"]:checked') ? parseInt(document.querySelector('input[name="motorGait"]:checked').value) : 0;
    const motorStability = document.querySelector('input[name="motorStability"]:checked') ? parseInt(document.querySelector('input[name="motorStability"]:checked').value) : 0;
    const motorBradykinesia = document.querySelector('input[name="motorBradykinesia"]:checked') ? parseInt(document.querySelector('input[name="motorBradykinesia"]:checked').value) : 0;

    const total = (
        motorSpeech + motorFace + (motorTremor * 5) + (motorRigidity * 5) +
        (motorFingers * 2) + (motorHands * 2) + (motorLegs * 2) +
        motorChair + motorPosture + motorGait + motorStability + motorBradykinesia
    );
    document.getElementById('motorTotal').textContent = total;
}

function updateDyskTotal() {
    const dyskDuration = document.querySelector('input[name="dyskDuration"]:checked') ? parseInt(document.querySelector('input[name="dyskDuration"]:checked').value) : 0;
    const dyskDisability = document.querySelector('input[name="dyskDisability"]:checked') ? parseInt(document.querySelector('input[name="dyskDisability"]:checked').value) : 0;
    const total = dyskDuration + dyskDisability;
    document.getElementById('dyskTotal').textContent = total;
}
