// Datos iniciales
const initialData = {
    products: [
        {
            id: 1,
            name: "Transferencias Inmediatas Salientes",
            unit: "Digital Payments",
            clients: [],
            transactions: 0,
            unitValue: 0,
            growth: 0,
            marketShare: 0,
            marketGrowth: 0,
            strategy: ""
        },
        {
            id: 2,
            name: "Debines Salientes e Internet Banking",
            unit: "Digital Payments",
            clients: [],
            transactions: 0,
            unitValue: 0,
            growth: 0,
            marketShare: 0,
            marketGrowth: 0,
            strategy: ""
        },
        {
            id: 3,
            name: "Pagos con Transferencias (PCT)",
            unit: "Instant Payments",
            clients: [],
            transactions: 0,
            unitValue: 0,
            growth: 0,
            marketShare: 0,
            marketGrowth: 0,
            strategy: ""
        },
        {
            id: 4,
            name: "Transferencias Entrantes para PSPs",
            unit: "Instant Payments",
            clients: [],
            transactions: 0,
            unitValue: 0,
            growth: 0,
            marketShare: 0,
            marketGrowth: 0,
            strategy: ""
        },
        {
            id: 5,
            name: "Transferencias Salientes para PSPs",
            unit: "Instant Payments",
            clients: [],
            transactions: 0,
            unitValue: 0,
            growth: 0,
            marketShare: 0,
            marketGrowth: 0,
            strategy: ""
        }
    ],
    clients: [
        { id: 1, name: "Mercado Pago", type: "Fintech", products: [], transactions: 0, revenue: 0 },
        { id: 2, name: "Banco Galicia", type: "Banco", products: [], transactions: 0, revenue: 0 }
    ],
    additionalProducts: [
        "QR Crédito + Transferencias 3.0",
        "Prevención del Fraude",
        "Extracción con Transferencias",
        "Transferencias Recurrentes",
        "Master Send y Visa Direct",
        "Payouts",
        "Cripto",
        "Remesas"
    ],
    pestelVariables: {
        political: [
            "Influencia gubernamental",
            "Situación política",
            "Subsidios gubernamentales",
            "Relaciones bilaterales",
            "Regulación & Desregulación",
            "Dólares en el colchón",
            "Normalización con el exterior",
            "Mayor apertura financiera",
            "Laissez faire",
            "$Libra"
        ],
        economic: [
            "Tasas de inflación",
            "Fusiones y transformación",
            "Tasas de crecimiento (formalización)",
            "Tasas de crecimiento (ingresos)",
            "Acceso a financiación",
            "Bancos pierden 'float'",
            "Tasas de Interés",
            "Peso apreciado",
            "Mercado Pago como Banco",
            "Mayor consumo en el exterior",
            "Mayor Competencia",
            "Vuelta de Argentina al mercado internacional",
            "Reaparece el crédito privado"
        ],
        social: [
            "Valores culturales (Generación Z & Millennials)",
            "Actitud hacia el riesgo",
            "Valores éticos",
            "Población (tamaño)",
            "Valores culturales (pago embebido)",
            "Openfinance",
            "Usuario siendo dueño de sus datos",
            "Digitalización de los pagos",
            "Open banking. Croud sourcing",
            "Usuarios más jóvenes operando en el ecosistema"
        ],
        technological: [
            "IoT",
            "AV & VR y Comunicaciones",
            "Inteligencia artificial",
            "Automatización",
            "Impacto del Blockchain",
            "Mayor fraude con IA",
            "Crypto",
            "Las marcas entrando en los rieles de transferencias"
        ],
        ecological: [
            "Huella de carbono",
            "Cambio climático (data centers)",
            "Cambio climático (resiliencia post-desastre)",
            "Niveles de polución",
            "Actitud a tecnologías verdes",
            "Menor relevancia a los temas ambientales"
        ],
        legal: [
            "Leyes de salvaguardia (Pla y FT)",
            "Leyes de salvaguardia (licencias hibridas)",
            "Leyes de salvaguardia (criptoactivos)",
            "Leyes de protección (Open Banking)",
            "Leyes de protección (verificación de beneficiario)",
            "Leyes de Empleo",
            "Leyes de Salud & Seguridad",
            "Desregulacion",
            "Normativa que habilite las CVU en dólares",
            "Mayor regulación al mundo cripto",
            "Competencia",
            "Laissez faire"
        ]
    },
    porterVariables: {
        "new-entrants": [
            "La regulación en el sector financiero puede ser un obstáculo, pero la digitalización está facilitando la entrada de nuevos competidores"
        ],
        "buyers": [
            "Bancos socios Dueños Coelsa",
            "Negociacion de Precios Coelsa",
            "Meli volumen"
        ],
        "substitutes": [
            "Crypto",
            "Rieles marcas"
        ],
        "competition": [
            "Link",
            "COELSA",
            "Alta Competencia",
            "Prisma",
            "Interbanking",
            "Cripto",
            "Riesgo de crecimiento de COELSA",
            "Aceleración de evolución tecnológica de COELSA"
        ],
        "suppliers": [
            "ACI"
        ]
    },
    strategies: [
        {
            nombre: "Campaña Digital Masiva",
            duracion: 3,
            inversion: 50000,
            impactoIngresos: 15,
            impactoCostos: 5
        }
    ],
    selectedPestelVariables: [],
    selectedPorterVariables: [],
    activeStrategies: [],
    financialData: {
        revenue: 0,
        opCosts: 0,
        genExpenses: 0,
        ebitda: 0,
        roi: 0,
        nps: 50,
        churn: 5,
        uptime: 99.5
    },
    budget: {
        revenue: 1000000,
        opCosts: 300000,
        genExpenses: 200000,
        ebitda: 500000,
        roi: 25,
        nps: 60,
        churn: 3,
        uptime: 99.9
    }
};

// Estado de la aplicación
let state = {
    ...initialData,
    currentSection: 'dashboard'
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Generar datos iniciales aleatorios
    generateInitialData();
    
    // Configurar navegación
    setupNavigation();
    
    // Cargar sección inicial
    loadSection(state.currentSection);
    
    // Configurar eventos
    setupEventListeners();
    
    // Actualizar UI
    updateUI();
});

// Generar datos iniciales aleatorios
function generateInitialData() {
    // Generar 20 clientes ficticios
    const bankNames = ["Santander", "BBVA", "HSBC", "ICBC", "Macro", "Patagonia", "Ciudad", "Provincia", "Credicoop", "Supervielle"];
    const fintechNames = ["Ualá", "Personal Pay", "Naranja X", "Brubank", "Lemon", "Belo", "Ripio", "Buenbit", "Let's Bit", "Prex"];
    
    for (let i = 3; i <= 22; i++) {
        const isBank = Math.random() > 0.5;
        const name = isBank 
            ? bankNames[Math.floor(Math.random() * bankNames.length)] + " " + ["Argentina", "Rio", "Nación", "Sur"][Math.floor(Math.random() * 4)]
            : fintechNames[Math.floor(Math.random() * fintechNames.length)];
        
        state.clients.push({
            id: i,
            name: name,
            type: isBank ? "Banco" : "Fintech",
            products: [],
            transactions: 0,
            revenue: 0
        });
    }
    
    // Asignar productos a clientes y generar datos aleatorios
    state.products.forEach(product => {
        // Seleccionar aleatoriamente entre 3 y 8 clientes para cada producto
        const numClients = Math.floor(Math.random() * 6) + 3;
        const shuffledClients = [...state.clients].sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numClients; i++) {
            const client = shuffledClients[i];
            
            // Generar datos aleatorios
            const transactions = Math.floor(Math.random() * 50000) + 10000;
            const unitValue = (Math.random() * 3) + 0.5;
            const revenue = transactions * unitValue;
            
            // Asignar producto al cliente
            client.products.push({
                id: product.id,
                name: product.name,
                transactions: transactions,
                unitValue: unitValue,
                revenue: revenue
            });
            
            // Actualizar totales del cliente
            client.transactions += transactions;
            client.revenue += revenue;
            
            // Actualizar producto
            product.clients.push({
                id: client.id,
                name: client.name,
                transactions: transactions,
                unitValue: unitValue,
                revenue: revenue
            });
            
            product.transactions += transactions;
            product.unitValue = ((product.unitValue * (product.clients.length - 1)) + unitValue) / product.clients.length;
        }
        
        // Generar crecimiento y participación de mercado aleatorios
        product.growth = (Math.random() * 20) - 5; // Entre -5% y 15%
        product.marketShare = Math.random() * 30 + 5; // Entre 5% y 35%
        product.marketGrowth = Math.random() * 15 + 5; // Entre 5% y 20%
    });
    
    // Calcular datos financieros iniciales
    calculateFinancials();
}

// Configurar navegación
function setupNavigation() {
    const navLinks = document.querySelectorAll('#main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Actualizar estado
            state.currentSection = this.getAttribute('href').substring(1);
            
            // Actualizar navegación
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Cargar sección
            loadSection(state.currentSection);
        });
    });
}

// Cargar sección
function loadSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Mostrar sección actual
    document.getElementById(sectionId).classList.add('active-section');
    
    // Actualizar contenido específico de la sección
    switch(sectionId) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'productos':
            updateProductsSection();
            break;
        case 'clientes':
            updateClientsSection();
            break;
        case 'entorno':
            updatePestelSection();
            break;
        case 'competitivo':
            updatePorterSection();
            break;
        case 'bcg':
            updateBCGSection();
            break;
        case 'estrategias':
            updateStrategiesSection();
            break;
        case 'pl':
            updatePLSection();
            break;
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContainer = this.closest('.tabs').parentElement;
            
            // Actualizar botones de pestaña
            tabContainer.querySelectorAll('.tab-btn').forEach(tabBtn => {
                tabBtn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Actualizar contenido de pestaña
            tabContainer.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            tabContainer.querySelector(`#${tabId}`).classList.add('active');
        });
    });
    
    // Formulario para agregar producto
    document.getElementById('add-product-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newProductName = document.getElementById('new-product').value;
        const productUnit = document.getElementById('product-unit').value;
        
        if (!newProductName) return;
        
        // Crear nuevo producto
        const newProduct = {
            id: state.products.length + 1,
            name: newProductName,
            unit: productUnit,
            clients: [],
            transactions: 0,
            unitValue: 0,
            growth: 0,
            marketShare: 0,
            marketGrowth: 0,
            strategy: ""
        };
        
        state.products.push(newProduct);
        
        // Actualizar UI
        updateProductsSection();
        
        // Resetear formulario
        this.reset();
    });
    
    // Formulario PESTEL
    document.getElementById('pestel-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Actualizar análisis PESTEL
        updatePestelAnalysis();
        
        // Mostrar pestaña de análisis
        document.querySelector('#entorno .tab-btn[data-tab="pestel-analysis"]').click();
    });
    
    // Formulario Porter
    document.getElementById('porter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Actualizar análisis Porter
        updatePorterAnalysis();
        
        // Mostrar pestaña de análisis
        document.querySelector('#competitivo .tab-btn[data-tab="porter-analysis"]').click();
    });
    
    // Formulario BCG
    document.getElementById('bcg-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const productId = parseInt(document.getElementById('bcg-product').value);
        const marketGrowth = parseFloat(document.getElementById('market-growth').value);
        const marketShare = parseFloat(document.getElementById('market-share').value);
        const growthStrategy = document.getElementById('growth-strategy').value;
        
        // Actualizar producto
        const product = state.products.find(p => p.id === productId);
        if (product) {
            product.marketGrowth = marketGrowth;
            product.marketShare = marketShare;
            product.strategy = growthStrategy;
            
            // Actualizar UI
            updateBCGSection();
            
            // Generar estrategia Ansoff
            generateAnsoffStrategy(product);
        }
    });
    
    // Formulario nueva estrategia
    document.getElementById('new-strategy-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('strategy-name').value;
        const type = document.getElementById('strategy-type').value;
        const productId = parseInt(document.getElementById('strategy-product').value);
        const investment = parseFloat(document.getElementById('strategy-investment').value);
        const duration = parseInt(document.getElementById('strategy-duration').value);
        const growth = parseFloat(document.getElementById('strategy-growth').value);
        
        // Crear nueva estrategia
        const newStrategy = {
            id: state.strategies.length + 1,
            nombre: name,
            tipo: type,
            productoId: productId,
            inversion: investment,
            duracion: duration,
            impactoIngresos: growth,
            impactoCostos: 0,
            activa: false
        };
        
        state.strategies.push(newStrategy);
        
        // Actualizar UI
        updateStrategiesSection();
        
        // Resetear formulario
        this.reset();
    });
    
    // Botones para agregar variables
    document.querySelectorAll('.add-variable').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            addVariableInput(category);
        });
    });
    
    // Modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
}

// Actualizar toda la UI
function updateUI() {
    updateDashboard();
    updateProductsSection();
    updateClientsSection();
    updatePestelSection();
    updatePorterSection();
    updateBCGSection();
    updateStrategiesSection();
    updatePLSection();
}

// Actualizar dashboard
function updateDashboard() {
    // Actualizar KPIs
    document.getElementById('ebitda-kpi').textContent = `$${state.financialData.ebitda.toLocaleString()}`;
    document.getElementById('roi-kpi').textContent = `${state.financialData.roi.toFixed(1)}%`;
    document.getElementById('transactions-kpi').textContent = state.products.reduce((sum, p) => sum + p.transactions, 0).toLocaleString();
    document.getElementById('nps-kpi').textContent = state.financialData.nps;
    
    // Actualizar tendencias
    updateKPITrends();
    
    // Actualizar gráficos
    updateRevenueChart();
    updateTransactionsChart();
    
    // Actualizar alertas estratégicas
    updateStrategicAlerts();
}

// Actualizar tendencias de KPIs
function updateKPITrends() {
    const ebitdaTrend = document.querySelector('#ebitda-kpi + .kpi-trend');
    const roiTrend = document.querySelector('#roi-kpi + .kpi-trend');
    const transactionsTrend = document.querySelector('#transactions-kpi + .kpi-trend');
    const npsTrend = document.querySelector('#nps-kpi + .kpi-trend');
    
    // Calcular diferencias con budget
    const ebitdaDiff = ((state.financialData.ebitda - state.budget.ebitda) / state.budget.ebitda) * 100;
    const roiDiff = state.financialData.roi - state.budget.roi;
    const transactionsTotal = state.products.reduce((sum, p) => sum + p.transactions, 0);
    const transactionsBudget = state.budget.revenue / 2; // Asumir valor promedio de $2 por transacción
    const transactionsDiff = ((transactionsTotal - transactionsBudget) / transactionsBudget) * 100;
    const npsDiff = state.financialData.nps - state.budget.nps;
    
    // Actualizar estilos y valores
    updateTrendElement(ebitdaTrend, ebitdaDiff);
    updateTrendElement(roiTrend, roiDiff);
    updateTrendElement(transactionsTrend, transactionsDiff);
    updateTrendElement(npsTrend, npsDiff);
}

function updateTrendElement(element, difference) {
    element.innerHTML = `${difference > 0 ? '+' : ''}${difference.toFixed(1)}% <i class='fas fa-arrow-${difference > 0 ? 'up' : difference < 0 ? 'down' : 'equals'}'></i>`;
    
    element.className = 'kpi-trend';
    if (difference > 0) {
        element.classList.add('up');
    } else if (difference < 0) {
        element.classList.add('down');
    } else {
        element.classList.add('neutral');
    }
}

// Actualizar gráfico de ingresos
function updateRevenueChart() {
    const ctx = document.getElementById('revenue-chart').getContext('2d');
    
    // Datos para los últimos 12 meses
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const currentMonth = new Date().getMonth();
    const labels = [...months.slice(currentMonth + 1), ...months.slice(0, currentMonth + 1)];
    
    // Generar datos aleatorios con tendencia
    const baseRevenue = state.financialData.revenue / 12;
    const revenueData = [];
    let prevValue = baseRevenue;
    
    for (let i = 0; i < 12; i++) {
        const randomFactor = 0.9 + Math.random() * 0.2; // Entre 0.9 y 1.1
        const growthFactor = 1 + (i * 0.02); // Tendencia de crecimiento del 2% por mes
        const value = baseRevenue * randomFactor * growthFactor;
        revenueData.push(value);
        prevValue = value;
    }
    
    // Crear o actualizar gráfico
    if (window.revenueChart) {
        window.revenueChart.data.labels = labels;
        window.revenueChart.data.datasets[0].data = revenueData;
        window.revenueChart.update();
    } else {
        window.revenueChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Ingresos Mensuales',
                    data: revenueData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return `$${(value / 1000).toFixed(0)}k`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Actualizar gráfico de transacciones
function updateTransactionsChart() {
    const ctx = document.getElementById('transactions-chart').getContext('2d');
    
    // Datos por producto
    const labels = state.products.map(p => p.name);
    const data = state.products.map(p => p.transactions);
    
    // Crear o actualizar gráfico
    if (window.transactionsChart) {
        window.transactionsChart.data.labels = labels;
        window.transactionsChart.data.datasets[0].data = data;
        window.transactionsChart.update();
    } else {
        window.transactionsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Transacciones',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw.toLocaleString()} transacciones`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return `${(value / 1000).toFixed(0)}k`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Actualizar alertas estratégicas
function updateStrategicAlerts() {
    const container = document.getElementById('strategic-alerts');
    container.innerHTML = '';
    
    // Alertas basadas en análisis PESTEL
    const politicalImpact = state.selectedPestelVariables
        .filter(v => v.category === 'political')
        .reduce((sum, v) => sum + v.impact, 0) / 5;
    
    if (politicalImpact > 3) {
        addAlert(container, 'Político', 'Alto impacto en factores políticos. Considerar estrategias de mitigación.', 'high');
    }
    
    // Alertas basadas en análisis Porter
    const competitionImpact = state.selectedPorterVariables
        .filter(v => v.category === 'competition')
        .reduce((sum, v) => sum + v.impact, 0) / 5;
    
    if (competitionImpact > 3) {
        addAlert(container, 'Competitivo', 'Alta intensidad competitiva. Evaluar estrategias de diferenciación.', 'high');
    }
    
    // Alertas basadas en BCG
    const questionMarks = state.products.filter(p => 
        p.marketGrowth > 10 && p.marketShare < 15
    );
    
    if (questionMarks.length > 0) {
        addAlert(container, 'Productos Incógnita', `${questionMarks.length} productos en cuadrante Incógnita. Requieren inversión o desinversión.`, 'medium');
    }
}

function addAlert(container, title, message, severity) {
    const alert = document.createElement('div');
    alert.className = `alert ${severity}`;
    alert.innerHTML = `
        <h4>${title}</h4>
        <p>${message}</p>
    `;
    container.appendChild(alert);
}

// Actualizar sección de productos
function updateProductsSection() {
    // Actualizar tabla de Digital Payments
    const digitalTable = document.getElementById('digital-products-table');
    digitalTable.innerHTML = '';
    
    state.products
        .filter(p => p.unit === 'Digital Payments')
        .forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.clients.length}</td>
                <td>${product.transactions.toLocaleString()}</td>
                <td>$${product.unitValue.toFixed(2)}</td>
                <td>$${(product.transactions * product.unitValue).toLocaleString()}</td>
                <td>${product.growth.toFixed(1)}%</td>
                <td>
                    <button class='btn small' data-action='edit' data-id='${product.id}'>Editar</button>
                </td>
            `;
            digitalTable.appendChild(row);
        });
    
    // Actualizar tabla de Instant Payments
    const instantTable = document.getElementById('instant-products-table');
    instantTable.innerHTML = '';
    
    state.products
        .filter(p => p.unit === 'Instant Payments')
        .forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.clients.length}</td>
                <td>${product.transactions.toLocaleString()}</td>
                <td>$${product.unitValue.toFixed(2)}</td>
                <td>$${(product.transactions * product.unitValue).toLocaleString()}</td>
                <td>${product.growth.toFixed(1)}%</td>
                <td>
                    <button class='btn small' data-action='edit' data-id='${product.id}'>Editar</button>
                </td>
            `;
            instantTable.appendChild(row);
        });
    
    // Configurar eventos de botones
    setupProductEditButtons();
}

// Configurar botones de edición de productos
function setupProductEditButtons() {
    document.querySelectorAll('[data-action="edit"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = state.products.find(p => p.id === productId);
            
            if (product) {
                showEditProductModal(product);
            }
        });
    });
}

// Mostrar modal de edición de producto
function showEditProductModal(product) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h3>Editar ${product.name}</h3>
        <form id='edit-product-form'>
            <div class='form-group'>
                <label for='edit-transactions'>Transacciones:</label>
                <input type='number' id='edit-transactions' value='${product.transactions}' required>
            </div>
            <div class='form-group'>
                <label for='edit-unit-value'>Valor unitario:</label>
                <input type='number' id='edit-unit-value' step='0.01' value='${product.unitValue.toFixed(2)}' required>
            </div>
            <div class='form-group'>
                <label for='edit-growth'>Crecimiento (%):</label>
                <input type='number' id='edit-growth' step='0.1' value='${product.growth.toFixed(1)}' required>
            </div>
            <button type='submit' class='btn'>Guardar</button>
        </form>
    `;
    
    // Configurar formulario
    document.getElementById('edit-product-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        product.transactions = parseInt(document.getElementById('edit-transactions').value);
        product.unitValue = parseFloat(document.getElementById('edit-unit-value').value);
        product.growth = parseFloat(document.getElementById('edit-growth').value);
        
        // Recalcular datos financieros
        calculateFinancials();
        
        // Actualizar UI
        updateUI();
        
        // Cerrar modal
        modal.style.display = 'none';
    });
    
    // Mostrar modal
    modal.style.display = 'block';
}

// Actualizar sección de clientes
function updateClientsSection() {
    const table = document.getElementById('clients-table');
    table.innerHTML = '';
    
    state.clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.type}</td>
            <td>${client.products.length}</td>
            <td>${client.transactions.toLocaleString()}</td>
            <td>$${client.revenue.toLocaleString()}</td>
            <td>
                <button class='btn small' data-action='view' data-id='${client.id}'>Ver</button>
            </td>
        `;
        table.appendChild(row);
    });
    
    // Configurar eventos de botones
    setupClientViewButtons();
}

// Configurar botones de visualización de clientes
function setupClientViewButtons() {
    document.querySelectorAll('[data-action="view"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const clientId = parseInt(this.getAttribute('data-id'));
            const client = state.clients.find(c => c.id === clientId);
            
            if (client) {
                showClientDetailsModal(client);
            }
        });
    });
}

// Mostrar modal de detalles del cliente
function showClientDetailsModal(client) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h3>${client.name} <small>(${client.type})</small></h3>
        <div class='client-details'>
            <div class='detail'>
                <span class='label'>Productos:</span>
                <span class='value'>${client.products.length}</span>
            </div>
            <div class='detail'>
                <span class='label'>Transacciones:</span>
                <span class='value'>${client.transactions.toLocaleString()}</span>
            </div>
            <div class='detail'>
                <span class='label'>Revenue:</span>
                <span class='value'>$${client.revenue.toLocaleString()}</span>
            </div>
        </div>
        
        <h4>Productos</h4>
        <table class='client-products'>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Transacciones</th>
                    <th>Valor Unitario</th>
                    <th>Revenue</th>
                </tr>
            </thead>
            <tbody>
                ${client.products.map(p => `
                    <tr>
                        <td>${p.name}</td>
                        <td>${p.transactions.toLocaleString()}</td>
                        <td>$${p.unitValue.toFixed(2)}</td>
                        <td>$${(p.transactions * p.unitValue).toLocaleString()}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    // Mostrar modal
    modal.style.display = 'block';
}

// Actualizar sección PESTEL
function updatePestelSection() {
    // Limpiar contenedores de variables
    document.getElementById('political-vars').innerHTML = '';
    document.getElementById('economic-vars').innerHTML = '';
    document.getElementById('social-vars').innerHTML = '';
    document.getElementById('technological-vars').innerHTML = '';
    document.getElementById('ecological-vars').innerHTML = '';
    document.getElementById('legal-vars').innerHTML = '';
    
    // Agregar variables seleccionadas
    state.selectedPestelVariables.forEach(variable => {
        addVariableInput(variable.category, variable.name, variable.impact, true);
    });
    
    // Actualizar gráfico radar si hay variables seleccionadas
    if (state.selectedPestelVariables.length > 0) {
        updatePestelRadar();
        updatePestelImpactSummary();
        generatePestelStrategies();
    }
}

// Agregar input de variable
function addVariableInput(category, name = '', impact = 3, isSelected = false) {
    const containerId = `${category}-vars`;
    const container = document.getElementById(containerId);
    
    const variableId = `var-${category}-${Date.now()}`;
    const variableItem = document.createElement('div');
    variableItem.className = 'variable-item';
    variableItem.innerHTML = `
        <div class='variable-select'>
            <select id='${variableId}-select' class='variable-select'>
                <option value=''>-- Seleccione variable --</option>
                ${state.pestelVariables[category].map(v => 
                    `<option value='${v}' ${name === v ? 'selected' : ''}>${v}</option>`
                ).join('')}
            </select>
        </div>
        <div class='variable-impact'>
            <select id='${variableId}-impact' class='impact-select'>
                <option value='1' ${impact === 1 ? 'selected' : ''}>Muy bajo</option>
                <option value='2' ${impact === 2 ? 'selected' : ''}>Bajo</option>
                <option value='3' ${impact === 3 ? 'selected' : ''}>Medio</option>
                <option value='4' ${impact === 4 ? 'selected' : ''}>Alto</option>
                <option value='5' ${impact === 5 ? 'selected' : ''}>Muy alto</option>
            </select>
        </div>
        <div class='variable-actions'>
            <button class='btn small' data-action='remove' data-id='${variableId}'>
                <i class='fas fa-times'></i>
            </button>
        </div>
    `;
    
    container.appendChild(variableItem);
    
    // Configurar eventos
    const selectEl = document.getElementById(`${variableId}-select`);
    const impactEl = document.getElementById(`${variableId}-impact`);
    const removeBtn = variableItem.querySelector('[data-action="remove"]');
    
    if (isSelected) {
        selectEl.disabled = true;
    }
    
    removeBtn.addEventListener('click', function() {
        if (isSelected) {
            // Eliminar de variables seleccionadas
            state.selectedPestelVariables = state.selectedPestelVariables.filter(
                v => !(v.category === category && v.name === name)
            );
        }
        variableItem.remove();
    });
}

// Actualizar análisis PESTEL
function updatePestelAnalysis() {
    // Limpiar variables seleccionadas
    state.selectedPestelVariables = [];
    
    // Recoger todas las variables seleccionadas
    document.querySelectorAll('.variable-item').forEach(item => {
        const select = item.querySelector('.variable-select select');
        const impact = item.querySelector('.impact-select select');
        const category = item.parentElement.id.replace('-vars', '');
        
        if (select.value) {
            state.selectedPestelVariables.push({
                category: category,
                name: select.value,
                impact: parseInt(impact.value)
            });
        }
    });
    
    // Actualizar gráfico y resumen
    updatePestelRadar();
    updatePestelImpactSummary();
    generatePestelStrategies();
}

// Actualizar gráfico radar PESTEL
function updatePestelRadar() {
    const ctx = document.getElementById('pestel-radar').getContext('2d');
    
    // Agrupar por categoría
    const categories = ['political', 'economic', 'social', 'technological', 'ecological', 'legal'];
    const labels = ['Político', 'Económico', 'Social', 'Tecnológico', 'Ecológico', 'Legal'];
    
    const categoryData = categories.map(category => {
        const vars = state.selectedPestelVariables.filter(v => v.category === category);
        if (vars.length === 0) return 0;
        
        const avgImpact = vars.reduce((sum, v) => sum + v.impact, 0) / vars.length;
        return avgImpact;
    });
    
    // Crear o actualizar gráfico
    if (window.pestelRadar) {
        window.pestelRadar.data.datasets[0].data = categoryData;
        window.pestelRadar.update();
    } else {
        window.pestelRadar = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Impacto',
                    data: categoryData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Impacto: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Actualizar resumen de impacto PESTEL
function updatePestelImpactSummary() {
    const container = document.getElementById('pestel-impact-summary');
    container.innerHTML = '';
    
    // Agrupar por categoría
    const categories = ['political', 'economic', 'social', 'technological', 'ecological', 'legal'];
    const labels = ['Político', 'Económico', 'Social', 'Tecnológico', 'Ecológico', 'Legal'];
    
    categories.forEach((category, index) => {
        const vars = state.selectedPestelVariables.filter(v => v.category === category);
        if (vars.length === 0) return;
        
        const avgImpact = vars.reduce((sum, v) => sum + v.impact, 0) / vars.length;
        
        const categoryEl = document.createElement('div');
        categoryEl.className = 'impact-category';
        categoryEl.innerHTML = `
            <h4>${labels[index]}</h4>
            <div class='impact-bar'>
                <div class='impact-fill' style='width: ${(avgImpact / 5) * 100}%'></div>
                <span class='impact-value'>${avgImpact.toFixed(1)}</span>
            </div>
            <div class='impact-variables'>
                ${vars.map(v => `
                    <div class='impact-variable'>
                        <span>${v.name}</span>
                        <span class='impact-level'>${getImpactLabel(v.impact)}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(categoryEl);
    });
}

function getImpactLabel(impact) {
    const labels = ['Muy bajo', 'Bajo', 'Medio', 'Alto', 'Muy alto'];
    return labels[impact - 1];
}

// Generar estrategias PESTEL
function generatePestelStrategies() {
    const container = document.getElementById('pestel-strategies-container');
    container.innerHTML = '';
    
    // Identificar categorías con mayor impacto (promedio > 3)
    const highImpactCategories = [];
    
    const categories = ['political', 'economic', 'social', 'technological', 'ecological', 'legal'];
    const labels = ['Político', 'Económico', 'Social', 'Tecnológico', 'Ecológico', 'Legal'];
    
    categories.forEach((category, index) => {
        const vars = state.selectedPestelVariables.filter(v => v.category === category);
        if (vars.length === 0) return;
        
        const avgImpact = vars.reduce((sum, v) => sum + v.impact, 0) / vars.length;
        if (avgImpact > 3) {
            highImpactCategories.push({
                name: labels[index],
                category: category,
                impact: avgImpact,
                variables: vars
            });
        }
    });
    
    // Generar estrategias para cada categoría de alto impacto
    highImpactCategories.forEach(cat => {
        const strategyCard = document.createElement('div');
        strategyCard.className = 'strategy-card';
        
        let strategies = '';
        
        switch(cat.category) {
            case 'political':
                strategies = `
                    <li>Desarrollar relaciones con reguladores y autoridades gubernamentales</li>
                    <li>Monitorear cambios regulatorios y adaptar productos en consecuencia</li>
                    <li>Participar en iniciativas de inclusión financiera para acceder a subsidios</li>
                `;
                break;
            case 'economic':
                strategies = `
                    <li>Diversificar fuentes de ingresos para mitigar fluctuaciones económicas</li>
                    <li>Optimizar estructura de costos para mantener rentabilidad en entornos inflacionarios</li>
                    <li>Explorar alianzas estratégicas con bancos y fintechs para escalar rápidamente</li>
                `;
                break;
            case 'social':
                strategies = `
                    <li>Desarrollar programas de educación financiera para aumentar adopción</li>
                    <li>Implementar soluciones de seguridad avanzadas para combatir fraude</li>
                    <li>Diseñar interfaces pensadas en generaciones más jóvenes</li>
                `;
                break;
            case 'technological':
                strategies = `
                    <li>Invertir en IA para prevención de fraude en tiempo real</li>
                    <li>Adoptar estándares como ISO 20022 para mejorar interoperabilidad</li>
                    <li>Explorar integración con pagos IoT y M2M</li>
                `;
                break;
            case 'ecological':
                strategies = `
                    <li>Implementar cálculo de huella de carbono en transacciones</li>
                    <li>Migrar data centers a energía renovable</li>
                    <li>Promover beneficios ecológicos de pagos digitales vs. efectivo</li>
                `;
                break;
            case 'legal':
                strategies = `
                    <li>Fortalecer equipos de compliance para cumplir con nuevas regulaciones</li>
                    <li>Desarrollar soluciones compatibles con Open Banking/Finance</li>
                    <li>Participar en discusiones regulatorias sobre criptoactivos</li>
                `;
                break;
        }
        
        strategyCard.innerHTML = `
            <div class='strategy-header'>
                <div class='strategy-title'>Estrategias para factores ${cat.name}</div>
                <div class='strategy-type type-pestel'>PESTEL</div>
            </div>
            <div class='strategy-details'>
                <div>
                    <h5>Variables clave:</h5>
                    <ul>
                        ${cat.variables.map(v => `<li>${v.name} (${getImpactLabel(v.impact)})</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5>Estrategias recomendadas:</h5>
                    <ul>
                        ${strategies}
                    </ul>
                </div>
            </div>
            <div class='strategy-actions'>
                <button class='btn small' data-action='save-strategy' data-category='${cat.category}'>Guardar Estrategia</button>
            </div>
        `;
        
        container.appendChild(strategyCard);
    });
    
    // Configurar botones para guardar estrategias
    setupSaveStrategyButtons();
}

// Configurar botones para guardar estrategias
function setupSaveStrategyButtons() {
    document.querySelectorAll('[data-action="save-strategy"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const card = this.closest('.strategy-card');
            
            // Crear nombre de estrategia
            const title = card.querySelector('.strategy-title').textContent;
            const strategiesList = card.querySelector('ul:last-of-type');
            const firstStrategy = strategiesList.querySelector('li').textContent;
            
            const newStrategy = {
                id: state.strategies.length + 1,
                nombre: `${title}: ${firstStrategy}`,
                tipo: 'PESTEL',
                productoId: null,
                inversion: 50000,
                duracion: 6,
                impactoIngresos: 10,
                impactoCostos: 5,
                activa: false
            };
            
            state.strategies.push(newStrategy);
            
            // Mostrar confirmación
            alert(`Estrategia "${newStrategy.nombre}" guardada. Puede activarla en la sección de Estrategias.`);
        });
    });
}

// Actualizar sección Porter
function updatePorterSection() {
    // Limpiar contenedores de variables
    document.getElementById('new-entrants-vars').innerHTML = '';
    document.getElementById('buyers-vars').innerHTML = '';
    document.getElementById('substitutes-vars').innerHTML = '';
    document.getElementById('competition-vars').innerHTML = '';
    document.getElementById('suppliers-vars').innerHTML = '';
    
    // Agregar variables seleccionadas
    state.selectedPorterVariables.forEach(variable => {
        addPorterVariableInput(variable.category, variable.name, variable.impact, true);
    });
    
    // Actualizar gráfico radar si hay variables seleccionadas
    if (state.selectedPorterVariables.length > 0) {
        updatePorterRadar();
        updatePorterImpactSummary();
        generatePorterStrategies();
    }
}

// Agregar input de variable Porter
function addPorterVariableInput(category, name = '', impact = 3, isSelected = false) {
    const containerId = `${category}-vars`;
    const container = document.getElementById(containerId);
    
    const variableId = `var-${category}-${Date.now()}`;
    const variableItem = document.createElement('div');
    variableItem.className = 'variable-item';
    variableItem.innerHTML = `
        <div class='variable-select'>
            <select id='${variableId}-select' class='variable-select'>
                <option value=''>-- Seleccione variable --</option>
                ${state.porterVariables[category].map(v => 
                    `<option value='${v}' ${name === v ? 'selected' : ''}>${v}</option>`
                ).join('')}
            </select>
        </div>
        <div class='variable-impact'>
            <select id='${variableId}-impact' class='impact-select'>
                <option value='1' ${impact === 1 ? 'selected' : ''}>Muy bajo</option>
                <option value='2' ${impact === 2 ? 'selected' : ''}>Bajo</option>
                <option value='3' ${impact === 3 ? 'selected' : ''}>Medio</option>
                <option value='4' ${impact === 4 ? 'selected' : ''}>Alto</option>
                <option value='5' ${impact === 5 ? 'selected' : ''}>Muy alto</option>
            </select>
        </div>
        <div class='variable-actions'>
            <button class='btn small' data-action='remove' data-id='${variableId}'>
                <i class='fas fa-times'></i>
            </button>
        </div>
    `;
    
    container.appendChild(variableItem);
    
    // Configurar eventos
    const selectEl = document.getElementById(`${variableId}-select`);
    const impactEl = document.getElementById(`${variableId}-impact`);
    const removeBtn = variableItem.querySelector('[data-action="remove"]');
    
    if (isSelected) {
        selectEl.disabled = true;
    }
    
    removeBtn.addEventListener('click', function() {
        if (isSelected) {
            // Eliminar de variables seleccionadas
            state.selectedPorterVariables = state.selectedPorterVariables.filter(
                v => !(v.category === category && v.name === name)
            );
        }
        variableItem.remove();
    });
}

// Actualizar análisis Porter
function updatePorterAnalysis() {
    // Limpiar variables seleccionadas
    state.selectedPorterVariables = [];
    
    // Recoger todas las variables seleccionadas
    document.querySelectorAll('.variable-item').forEach(item => {
        const select = item.querySelector('.variable-select select');
        const impact = item.querySelector('.impact-select select');
        const category = item.parentElement.id.replace('-vars', '');
        
        if (select.value) {
            state.selectedPorterVariables.push({
                category: category,
                name: select.value,
                impact: parseInt(impact.value)
            });
        }
    });
    
    // Actualizar gráfico y resumen
    updatePorterRadar();
    updatePorterImpactSummary();
    generatePorterStrategies();
}

// Actualizar gráfico radar Porter
function updatePorterRadar() {
    const ctx = document.getElementById('porter-radar').getContext('2d');
    
    // Agrupar por categoría
    const categories = ['new-entrants', 'buyers', 'substitutes', 'competition', 'suppliers'];
    const labels = ['Nuevos entrantes', 'Poder clientes', 'Sustitutos', 'Competencia', 'Proveedores'];
    
    const categoryData = categories.map(category => {
        const vars = state.selectedPorterVariables.filter(v => v.category === category);
        if (vars.length === 0) return 0;
        
        const avgImpact = vars.reduce((sum, v) => sum + v.impact, 0) / vars.length;
        return avgImpact;
    });
    
    // Crear o actualizar gráfico
    if (window.porterRadar) {
        window.porterRadar.data.datasets[0].data = categoryData;
        window.porterRadar.update();
    } else {
        window.porterRadar = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Intensidad',
                    data: categoryData,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Intensidad: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Actualizar resumen de impacto Porter
function updatePorterImpactSummary() {
    const container = document.getElementById('porter-impact-summary');
    container.innerHTML = '';
    
    // Agrupar por categoría
    const categories = ['new-entrants', 'buyers', 'substitutes', 'competition', 'suppliers'];
    const labels = ['Nuevos entrantes', 'Poder clientes', 'Sustitutos', 'Competencia', 'Proveedores'];
    
    categories.forEach((category, index) => {
        const vars = state.selectedPorterVariables.filter(v => v.category === category);
        if (vars.length === 0) return;
        
        const avgImpact = vars.reduce((sum, v) => sum + v.impact, 0) / vars.length;
        
        const categoryEl = document.createElement('div');
        categoryEl.className = 'impact-category';
        categoryEl.innerHTML = `
            <h4>${labels[index]}</h4>
            <div class='impact-bar'>
                <div class='impact-fill' style='width: ${(avgImpact / 5) * 100}%'></div>
                <span class='impact-value'>${avgImpact.toFixed(1)}</span>
            </div>
            <div class='impact-variables'>
                ${vars.map(v => `
                    <div class='impact-variable'>
                        <span>${v.name}</span>
                        <span class='impact-level'>${getImpactLabel(v.impact)}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(categoryEl);
    });
}

// Generar estrategias Porter
function generatePorterStrategies() {
    const container = document.getElementById('porter-strategies-container');
    container.innerHTML = '';
    
    // Identificar fuerzas con mayor intensidad (promedio > 3)
    const highImpactForces = [];
    
    const categories = ['new-entrants', 'buyers', 'substitutes', 'competition', 'suppliers'];
    const labels = ['Nuevos entrantes', 'Poder clientes', 'Sustitutos', 'Competencia', 'Proveedores'];
    
    categories.forEach((category, index) => {
        const vars = state.selectedPorterVariables.filter(v => v.category === category);
        if (vars.length === 0) return;
        
        const avgImpact = vars.reduce((sum, v) => sum + v.impact, 0) / vars.length;
        if (avgImpact > 3) {
            highImpactForces.push({
                name: labels[index],
                category: category,
                impact: avgImpact,
                variables: vars
            });
        }
    });
    
    // Generar estrategias para cada fuerza de alto impacto
    highImpactForces.forEach(force => {
        const strategyCard = document.createElement('div');
        strategyCard.className = 'strategy-card';
        
        let strategies = '';
        
        switch(force.category) {
            case 'new-entrants':
                strategies = `
                    <li>Construir barreras de entrada mediante economías de escala</li>
                    <li>Establecer acuerdos de exclusividad con clientes clave</li>
                    <li>Invertir en tecnología diferenciadora difícil de replicar</li>
                `;
                break;
            case 'buyers':
                strategies = `
                    <li>Diversificar base de clientes para reducir dependencia</li>
                    <li>Crear programas de fidelización para aumentar switching costs</li>
                    <li>Desarrollar productos diferenciados que reduzcan el poder de negociación</li>
                `;
                break;
            case 'substitutes':
                strategies = `
                    <li>Mejorar valor percibido mediante características únicas</li>
                    <li>Educar al mercado sobre ventajas frente a sustitutos</li>
                    <li>Explorar integraciones con sustitutos para convertirlos en complementos</li>
                `;
                break;
            case 'competition':
                strategies = `
                    <li>Diferenciarse mediante innovación y servicio al cliente</li>
                    <li>Explorar nichos de mercado menos competidos</li>
                    <li>Considerar alianzas estratégicas con competidores para crear estándares</li>
                `;
                break;
            case 'suppliers':
                strategies = `
                    <li>Diversificar base de proveedores para reducir dependencia</li>
                    <li>Internalizar procesos críticos para reducir poder de proveedores</li>
                    <li>Negociar contratos a largo plazo para fijar condiciones favorables</li>
                `;
                break;
        }
        
        strategyCard.innerHTML = `
            <div class='strategy-header'>
                <div class='strategy-title'>Estrategias para fuerza ${force.name}</div>
                <div class='strategy-type type-porter'>Porter</div>
            </div>
            <div class='strategy-details'>
                <div>
                    <h5>Variables clave:</h5>
                    <ul>
                        ${force.variables.map(v => `<li>${v.name} (${getImpactLabel(v.impact)})</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5>Estrategias recomendadas:</h5>
                    <ul>
                        ${strategies}
                    </ul>
                </div>
            </div>
            <div class='strategy-actions'>
                <button class='btn small' data-action='save-strategy' data-category='${force.category}'>Guardar Estrategia</button>
            </div>
        `;
        
        container.appendChild(strategyCard);
    });
    
    // Configurar botones para guardar estrategias
    setupSaveStrategyButtons();
}

// Actualizar sección BCG
function updateBCGSection() {
    // Limpiar cuadrantes
    document.getElementById('star-products').innerHTML = '';
    document.getElementById('question-products').innerHTML = '';
    document.getElementById('cash-cow-products').innerHTML = '';
    document.getElementById('dog-products').innerHTML = '';
    
    // Actualizar selector de productos
    const productSelect = document.getElementById('bcg-product');
    productSelect.innerHTML = '<option value="">-- Seleccione producto --</option>';
    
    state.products.forEach(product => {
        // Clasificar producto
        let quadrant;
        if (product.marketGrowth >= 10 && product.marketShare >= 15) {
            quadrant = 'star';
        } else if (product.marketGrowth >= 10 && product.marketShare < 15) {
            quadrant = 'question';
        } else if (product.marketGrowth < 10 && product.marketShare >= 15) {
            quadrant = 'cash-cow';
        } else {
            quadrant = 'dog';
        }
        
        // Agregar al cuadrante correspondiente
        const productEl = document.createElement('div');
        productEl.className = 'bcg-product';
        productEl.innerHTML = `
            <span>${product.name}</span>
            <small>(${product.marketShare.toFixed(1)}% share, ${product.marketGrowth.toFixed(1)}% growth)</small>
        `;
        
        document.getElementById(`${quadrant}-products`).appendChild(productEl);
        
        // Agregar al selector
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    // Actualizar estrategias Ansoff
    updateAnsoffStrategies();
}

// Actualizar estrategias Ansoff
function updateAnsoffStrategies() {
    const container = document.getElementById('ansoff-strategies-container');
    container.innerHTML = '';
    
    // Agrupar productos por estrategia
    const strategies = {
        penetration: [],
        development: [],
        expansion: [],
        diversification: []
    };
    
    state.products.forEach(product => {
        if (product.strategy && strategies[product.strategy]) {
            strategies[product.strategy].push(product);
        }
    });
    
    // Mostrar estrategias con productos
    for (const [strategy, products] of Object.entries(strategies)) {
        if (products.length === 0) continue;
        
        const strategyCard = document.createElement('div');
        strategyCard.className = 'strategy-card';
        
        let strategyName, strategyDesc;
        
        switch(strategy) {
            case 'penetration':
                strategyName = 'Penetración de Mercado';
                strategyDesc = 'Aumentar participación en mercados existentes con productos existentes';
                break;
            case 'development':
                strategyName = 'Desarrollo de Producto';
                strategyDesc = 'Introducir nuevos productos en mercados existentes';
                break;
            case 'expansion':
                strategyName = 'Expansión de Mercado';
                strategyDesc = 'Llevar productos existentes a nuevos mercados';
                break;
            case 'diversification':
                strategyName = 'Diversificación';
                strategyDesc = 'Introducir nuevos productos en nuevos mercados';
                break;
        }
        
        strategyCard.innerHTML = `
            <div class='strategy-header'>
                <div class='strategy-title'>${strategyName}</div>
                <div class='strategy-type type-ansoff'>Ansoff</div>
            </div>
            <div class='strategy-details'>
                <p>${strategyDesc}</p>
                <h5>Productos:</h5>
                <ul>
                    ${products.map(p => `
                        <li>${p.name} (${p.marketShare.toFixed(1)}% share, ${p.marketGrowth.toFixed(1)}% growth)</li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        container.appendChild(strategyCard);
    }
}

// Generar estrategia Ansoff para un producto
function generateAnsoffStrategy(product) {
    let strategyName, strategyDesc, impact;
    
    if (product.marketGrowth >= 10 && product.marketShare >= 15) {
        // Estrella - Penetración de mercado
        strategyName = `Penetración de mercado para ${product.name}`;
        strategyDesc = `Invertir en marketing y ventas para aumentar participación en el mercado de alto crecimiento donde ${product.name} ya tiene fuerte posición.`;
        impact = 15;
    } else if (product.marketGrowth >= 10 && product.marketShare < 15) {
        // Incógnita - Desarrollo de producto o Expansión de mercado
        strategyName = `Desarrollo de producto para ${product.name}`;
        strategyDesc = `Invertir en mejorar ${product.name} para ganar participación en mercado de alto crecimiento.`;
        impact = 20;
    } else if (product.marketGrowth < 10 && product.marketShare >= 15) {
        // Vaca lechera - Penetración o Expansión
        strategyName = `Optimización de ${product.name}`;
        strategyDesc = `Maximizar eficiencia y rentabilidad de ${product.name} en mercado maduro donde tiene alta participación.`;
        impact = 10;
    } else {
        // Perro - Diversificación o Desinversión
        strategyName = `Reevaluación de ${product.name}`;
        strategyDesc = `Evaluar si mantener, reposicionar o desinvertir en ${product.name} dado su bajo crecimiento y participación.`;
        impact = 5;
    }
    
    const newStrategy = {
        id: state.strategies.length + 1,
        nombre: strategyName,
        tipo: 'Ansoff',
        productoId: product.id,
        inversion: product.marketGrowth >= 10 ? 75000 : 50000,
        duracion: 6,
        impactoIngresos: impact,
        impactoCostos: 5,
        activa: false
    };
    
    state.strategies.push(newStrategy);
    
    // Actualizar sección de estrategias
    updateStrategiesSection();
}

// Actualizar sección de estrategias
function updateStrategiesSection() {
    // Actualizar estrategias disponibles
    const availableContainer = document.getElementById('available-strategies-container');
    availableContainer.innerHTML = '';
    
    state.strategies.filter(s => !s.activa).forEach(strategy => {
        const strategyCard = document.createElement('div');
        strategyCard.className = 'strategy-card';
        
        let typeClass, typeName;
        
        switch(strategy.tipo) {
            case 'PESTEL':
                typeClass = 'type-pestel';
                typeName = 'Análisis del Entorno';
                break;
            case 'Porter':
                typeClass = 'type-porter';
                typeName = 'Análisis Competitivo';
                break;
            case 'Ansoff':
                typeClass = 'type-ansoff';
                typeName = 'Matriz BCG';
                break;
            default:
                typeClass = 'type-custom';
                typeName = 'Personalizada';
        }
        
        const productName = strategy.productoId 
            ? state.products.find(p => p.id === strategy.productoId)?.name 
            : 'Varios productos';
        
        strategyCard.innerHTML = `
            <div class='strategy-header'>
                <div class='strategy-title'>${strategy.nombre}</div>
                <div class='strategy-type ${typeClass}'>${typeName}</div>
            </div>
            <div class='strategy-details'>
                <div class='strategy-detail'>
                    <span>Producto:</span>
                    <span>${productName}</span>
                </div>
                <div class='strategy-detail'>
                    <span>Inversión:</span>
                    <span>$${strategy.inversion.toLocaleString()}</span>
                </div>
                <div class='strategy-detail'>
                    <span>Duración:</span>
                    <span>${strategy.duracion} meses</span>
                </div>
                <div class='strategy-detail'>
                    <span>Impacto ingresos:</span>
                    <span>+${strategy.impactoIngresos}%</span>
                </div>
            </div>
            <div class='strategy-actions'>
                <button class='btn small' data-action='activate' data-id='${strategy.id}'>Activar</button>
                <button class='btn small' data-action='edit-strategy' data-id='${strategy.id}'>Editar</button>
                <button class='btn small' data-action='delete' data-id='${strategy.id}'>Eliminar</button>
            </div>
        `;
        
        availableContainer.appendChild(strategyCard);
    });
    
    // Actualizar estrategias activas
    const activeContainer = document.getElementById('active-strategies-container');
    activeContainer.innerHTML = '';
    
    state.strategies.filter(s => s.activa).forEach(strategy => {
        const strategyCard = document.createElement('div');
        strategyCard.className = 'strategy-card';
        
        let typeClass, typeName;
        
        switch(strategy.tipo) {
            case 'PESTEL':
                typeClass = 'type-pestel';
                typeName = 'Análisis del Entorno';
                break;
            case 'Porter':
                typeClass = 'type-porter';
                typeName = 'Análisis Competitivo';
                break;
            case 'Ansoff':
                typeClass = 'type-ansoff';
                typeName = 'Matriz BCG';
                break;
            default:
                typeClass = 'type-custom';
                typeName = 'Personalizada';
        }
        
        const productName = strategy.productoId 
            ? state.products.find(p => p.id === strategy.productoId)?.name 
            : 'Varios productos';
        
        strategyCard.innerHTML = `
            <div class='strategy-header'>
                <div class='strategy-title'>${strategy.nombre}</div>
                <div class='strategy-type ${typeClass}'>${typeName}</div>
            </div>
            <div class='strategy-details'>
                <div class='strategy-detail'>
                    <span>Producto:</span>
                    <span>${productName}</span>
                </div>
                <div class='strategy-detail'>
                    <span>Inversión:</span>
                    <span>$${strategy.inversion.toLocaleString()}</span>
                </div>
                <div class='strategy-detail'>
                    <span>Duración:</span>
                    <span>${strategy.duracion} meses</span>
                </div>
                <div class='strategy-detail'>
                    <span>Impacto ingresos:</span>
                    <span>+${strategy.impactoIngresos}%</span>
                </div>
            </div>
            <div class='strategy-actions'>
                <button class='btn small' data-action='deactivate' data-id='${strategy.id}'>Desactivar</button>
                <button class='btn small' data-action='edit-strategy' data-id='${strategy.id}'>Editar</button>
            </div>
        `;
        
        activeContainer.appendChild(strategyCard);
    });
    
    // Actualizar selector de productos en formulario
    const productSelect = document.getElementById('strategy-product');
    productSelect.innerHTML = '<option value="">-- Seleccione producto (opcional) --</option>';
    
    state.products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    // Configurar eventos de botones
    setupStrategyActionButtons();
}

// Configurar botones de acción de estrategias
function setupStrategyActionButtons() {
    // Activar
    document.querySelectorAll('[data-action="activate"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const strategyId = parseInt(this.getAttribute('data-id'));
            const strategy = state.strategies.find(s => s.id === strategyId);
            
            if (strategy) {
                strategy.activa = true;
                
                // Aplicar impacto de la estrategia
                applyStrategyImpact(strategy);
                
                // Actualizar UI
                updateStrategiesSection();
                updateUI();
            }
        });
    });
    
    // Desactivar
    document.querySelectorAll('[data-action="deactivate"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const strategyId = parseInt(this.getAttribute('data-id'));
            const strategy = state.strategies.find(s => s.id === strategyId);
            
            if (strategy) {
                strategy.activa = false;
                
                // Revertir impacto de la estrategia
                revertStrategyImpact(strategy);
                
                // Actualizar UI
                updateStrategiesSection();
                updateUI();
            }
        });
    });
    
    // Editar
    document.querySelectorAll('[data-action="edit-strategy"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const strategyId = parseInt(this.getAttribute('data-id'));
            const strategy = state.strategies.find(s => s.id === strategyId);
            
            if (strategy) {
                showEditStrategyModal(strategy);
            }
        });
    });
    
    // Eliminar
    document.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const strategyId = parseInt(this.getAttribute('data-id'));
            
            if (confirm('¿Está seguro que desea eliminar esta estrategia?')) {
                state.strategies = state.strategies.filter(s => s.id !== strategyId);
                updateStrategiesSection();
            }
        });
    });
}

// Mostrar modal de edición de estrategia
function showEditStrategyModal(strategy) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const productName = strategy.productoId 
        ? state.products.find(p => p.id === strategy.productoId)?.name 
        : 'Ninguno';
    
    modalBody.innerHTML = `
        <h3>Editar Estrategia</h3>
        <form id='edit-strategy-form'>
            <div class='form-group'>
                <label for='edit-strategy-name'>Nombre:</label>
                <input type='text' id='edit-strategy-name' value='${strategy.nombre}' required>
            </div>
            <div class='form-group'>
                <label>Producto asociado:</label>
                <input type='text' value='${productName}' disabled>
            </div>
            <div class='form-group'>
                <label for='edit-strategy-investment'>Inversión estimada:</label>
                <input type='number' id='edit-strategy-investment' value='${strategy.inversion}' required>
            </div>
            <div class='form-group'>
                <label for='edit-strategy-duration'>Duración (meses):</label>
                <input type='number' id='edit-strategy-duration' value='${strategy.duracion}' required>
            </div>
            <div class='form-group'>
                <label for='edit-strategy-growth'>% Crecimiento esperado:</label>
                <input type='number' id='edit-strategy-growth' value='${strategy.impactoIngresos}' required>
            </div>
            <button type='submit' class='btn'>Guardar</button>
        </form>
    `;
    
    // Configurar formulario
    document.getElementById('edit-strategy-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        strategy.nombre = document.getElementById('edit-strategy-name').value;
        strategy.inversion = parseFloat(document.getElementById('edit-strategy-investment').value);
        strategy.duracion = parseInt(document.getElementById('edit-strategy-duration').value);
        strategy.impactoIngresos = parseFloat(document.getElementById('edit-strategy-growth').value);
        
        // Si la estrategia está activa, recalcular impacto
        if (strategy.activa) {
            revertStrategyImpact(strategy);
            applyStrategyImpact(strategy);
        }
        
        // Actualizar UI
        updateStrategiesSection();
        updateUI();
        
        // Cerrar modal
        modal.style.display = 'none';
    });
    
    // Mostrar modal
    modal.style.display = 'block';
}

// Aplicar impacto de estrategia
function applyStrategyImpact(strategy) {
    if (strategy.productoId) {
        // Estrategia para producto específico
        const product = state.products.find(p => p.id === strategy.productoId);
        if (product) {
            // Aumentar crecimiento y participación
            product.growth += strategy.impactoIngresos / 2;
            product.marketShare += strategy.impactoIngresos / 10;
            
            // Aumentar transacciones
            product.transactions = Math.floor(product.transactions * (1 + (strategy.impactoIngresos / 100)));
            
            // Actualizar clientes
            product.clients.forEach(clientRef => {
                const client = state.clients.find(c => c.id === clientRef.id);
                if (client) {
                    const clientProduct = client.products.find(p => p.id === product.id);
                    if (clientProduct) {
                        clientProduct.transactions = Math.floor(clientProduct.transactions * (1 + (strategy.impactoIngresos / 100)));
                        clientProduct.revenue = clientProduct.transactions * clientProduct.unitValue;
                        
                        // Actualizar totales del cliente
                        client.transactions = client.products.reduce((sum, p) => sum + p.transactions, 0);
                        client.revenue = client.products.reduce((sum, p) => sum + p.revenue, 0);
                    }
                }
            });
        }
    } else {
        // Estrategia general - aplicar a todos los productos
        state.products.forEach(product => {
            product.growth += strategy.impactoIngresos / 4;
            product.marketShare += strategy.impactoIngresos / 20;
            product.transactions = Math.floor(product.transactions * (1 + (strategy.impactoIngresos / 200)));
            
            // Actualizar clientes
            product.clients.forEach(clientRef => {
                const client = state.clients.find(c => c.id === clientRef.id);
                if (client) {
                    const clientProduct = client.products.find(p => p.id === product.id);
                    if (clientProduct) {
                        clientProduct.transactions = Math.floor(clientProduct.transactions * (1 + (strategy.impactoIngresos / 200)));
                        clientProduct.revenue = clientProduct.transactions * clientProduct.unitValue;
                        
                        // Actualizar totales del cliente
                        client.transactions = client.products.reduce((sum, p) => sum + p.transactions, 0);
                        client.revenue = client.products.reduce((sum, p) => sum + p.revenue, 0);
                    }
                }
            });
        });
    }
    
    // Añadir a estrategias activas si no está ya
    if (!state.activeStrategies.includes(strategy.id)) {
        state.activeStrategies.push(strategy.id);
    }
    
    // Recalcular datos financieros
    calculateFinancials();
}

// Revertir impacto de estrategia
function revertStrategyImpact(strategy) {
    if (strategy.productoId) {
        // Estrategia para producto específico
        const product = state.products.find(p => p.id === strategy.productoId);
        if (product) {
            // Revertir crecimiento y participación
            product.growth -= strategy.impactoIngresos / 2;
            product.marketShare -= strategy.impactoIngresos / 10;
            
            // Revertir transacciones
            product.transactions = Math.floor(product.transactions / (1 + (strategy.impactoIngresos / 100)));
            
            // Actualizar clientes
            product.clients.forEach(clientRef => {
                const client = state.clients.find(c => c.id === clientRef.id);
                if (client) {
                    const clientProduct = client.products.find(p => p.id === product.id);
                    if (clientProduct) {
                        clientProduct.transactions = Math.floor(clientProduct.transactions / (1 + (strategy.impactoIngresos / 100)));
                        clientProduct.revenue = clientProduct.transactions * clientProduct.unitValue;
                        
                        // Actualizar totales del cliente
                        client.transactions = client.products.reduce((sum, p) => sum + p.transactions, 0);
                        client.revenue = client.products.reduce((sum, p) => sum + p.revenue, 0);
                    }
                }
            });
        }
    } else {
        // Estrategia general - revertir en todos los productos
        state.products.forEach(product => {
            product.growth -= strategy.impactoIngresos / 4;
            product.marketShare -= strategy.impactoIngresos / 20;
            product.transactions = Math.floor(product.transactions / (1 + (strategy.impactoIngresos / 200)));
            
            // Actualizar clientes
            product.clients.forEach(clientRef => {
                const client = state.clients.find(c => c.id === clientRef.id);
                if (client) {
                    const clientProduct = client.products.find(p => p.id === product.id);
                    if (clientProduct) {
                        clientProduct.transactions = Math.floor(clientProduct.transactions / (1 + (strategy.impactoIngresos / 200)));
                        clientProduct.revenue = clientProduct.transactions * clientProduct.unitValue;
                        
                        // Actualizar totales del cliente
                        client.transactions = client.products.reduce((sum, p) => sum + p.transactions, 0);
                        client.revenue = client.products.reduce((sum, p) => sum + p.revenue, 0);
                    }
                }
            });
        });
    }
    
    // Eliminar de estrategias activas
    state.activeStrategies = state.activeStrategies.filter(id => id !== strategy.id);
    
    // Recalcular datos financieros
    calculateFinancials();
}

// Actualizar sección P&L
function updatePLSection() {
    // Actualizar valores resumen
    document.getElementById('revenue-value').textContent = `$${state.financialData.revenue.toLocaleString()}`;
    document.getElementById('op-costs-value').textContent = `$${state.financialData.opCosts.toLocaleString()}`;
    document.getElementById('gen-expenses-value').textContent = `$${state.financialData.genExpenses.toLocaleString()}`;
    document.getElementById('ebitda-value').textContent = `$${state.financialData.ebitda.toLocaleString()}`;
    
    // Actualizar cambios
    updatePLChanges();
    
    // Actualizar gráfico P&L
    updatePLChart();
    
    // Actualizar tabla de detalles
    updatePLDetailsTable();
    
    // Actualizar gráfico comparativo
    updateComparisonChart();
}

// Actualizar cambios en P&L
function updatePLChanges() {
    const revenueChange = ((state.financialData.revenue - state.budget.revenue) / state.budget.revenue) * 100;
    const opCostsChange = ((state.financialData.opCosts - state.budget.opCosts) / state.budget.opCosts) * 100;
    const genExpensesChange = ((state.financialData.genExpenses - state.budget.genExpenses) / state.budget.genExpenses) * 100;
    const ebitdaChange = ((state.financialData.ebitda - state.budget.ebitda) / state.budget.ebitda) * 100;
    
    document.getElementById('revenue-change').textContent = `${revenueChange > 0 ? '+' : ''}${revenueChange.toFixed(1)}%`;
    document.getElementById('op-costs-change').textContent = `${opCostsChange > 0 ? '+' : ''}${opCostsChange.toFixed(1)}%`;
    document.getElementById('gen-expenses-change').textContent = `${genExpensesChange > 0 ? '+' : ''}${genExpensesChange.toFixed(1)}%`;
    document.getElementById('ebitda-change').textContent = `${ebitdaChange > 0 ? '+' : ''}${ebitdaChange.toFixed(1)}%`;
    
    // Establecer colores según el cambio
    setChangeColor('revenue-change', revenueChange);
    setChangeColor('op-costs-change', opCostsChange, true);
    setChangeColor('gen-expenses-change', genExpensesChange, true);
    setChangeColor('ebitda-change', ebitdaChange);
}

function setChangeColor(elementId, change, reverse = false) {
    const element = document.getElementById(elementId);
    
    if (reverse) {
        // Para costos y gastos, menor es mejor
        if (change < 0) {
            element.className = 'pl-change positive';
        } else if (change > 0) {
            element.className = 'pl-change negative';
        } else {
            element.className = 'pl-change neutral';
        }
    } else {
        // Para ingresos y EBITDA, mayor es mejor
        if (change > 0) {
            element.className = 'pl-change positive';
        } else if (change < 0) {
            element.className = 'pl-change negative';
        } else {
            element.className = 'pl-change neutral';
        }
    }
}

// Actualizar gráfico P&L
function updatePLChart() {
    const ctx = document.getElementById('pl-chart').getContext('2d');
    
    const data = {
        labels: ['Ingresos', 'Costos Operativos', 'Gastos Generales', 'EBITDA'],
        datasets: [{
            label: 'Budget',
            data: [
                state.budget.revenue,
                state.budget.opCosts,
                state.budget.genExpenses,
                state.budget.ebitda
            ],
            backgroundColor: 'rgba(201, 203, 207, 0.5)',
            borderColor: 'rgba(201, 203, 207, 1)',
            borderWidth: 1
        }, {
            label: 'Actual',
            data: [
                state.financialData.revenue,
                state.financialData.opCosts,
                state.financialData.genExpenses,
                state.financialData.ebitda
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    
    // Crear o actualizar gráfico
    if (window.plChart) {
        window.plChart.data = data;
        window.plChart.update();
    } else {
        window.plChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return `$${(value / 1000).toFixed(0)}k`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Actualizar tabla de detalles P&L
function updatePLDetailsTable() {
    const table = document.getElementById('pl-details-table');
    table.innerHTML = '';
    
    state.products.forEach(product => {
        const revenue = product.transactions * product.unitValue;
        const costs = revenue * (state.financialData.opCosts / state.financialData.revenue);
        const margin = revenue - costs;
        const percent = (revenue / state.financialData.revenue) * 100;
        
        const trend = product.growth >= 0 ? 'up' : 'down';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${revenue.toLocaleString()}</td>
            <td>$${costs.toLocaleString()}</td>
            <td>$${margin.toLocaleString()}</td>
            <td>${percent.toFixed(1)}%</td>
            <td><i class='fas fa-arrow-${trend}'></i> ${Math.abs(product.growth).toFixed(1)}%</td>
        `;
        table.appendChild(row);
    });
}

// Actualizar gráfico comparativo
function updateComparisonChart() {
    const ctx = document.getElementById('comparison-chart').getContext('2d');
    const comparisonType = document.getElementById('comparison-type').value;
    
    let labels, actualData, comparisonData, comparisonLabel;
    
    // Preparar datos según tipo de comparación
    switch(comparisonType) {
        case 'month':
            labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            actualData = Array(12).fill().map(() => state.financialData.revenue * (0.7 + Math.random() * 0.6));
            comparisonData = Array(12).fill().map((_, i) => actualData[i] * (0.9 + Math.random() * 0.2));
            comparisonLabel = 'Mes anterior';
            break;
        case 'year':
            labels = ['2021', '2022', '2023'];
            actualData = [
                state.financialData.revenue * 0.6,
                state.financialData.revenue * 0.8,
                state.financialData.revenue
            ];
            comparisonData = [
                state.financialData.revenue * 0.5,
                state.financialData.revenue * 0.7,
                state.financialData.revenue * 0.9
            ];
            comparisonLabel = 'Año anterior';
            break;
        case 'budget':
            labels = ['Ingresos', 'Costos', 'Gastos', 'EBITDA'];
            actualData = [
                state.financialData.revenue,
                state.financialData.opCosts,
                state.financialData.genExpenses,
                state.financialData.ebitda
            ];
            comparisonData = [
                state.budget.revenue,
                state.budget.opCosts,
                state.budget.genExpenses,
                state.budget.ebitda
            ];
            comparisonLabel = 'Budget';
            break;
    }
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'Actual',
            data: actualData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: comparisonLabel,
            data: comparisonData,
            backgroundColor: 'rgba(201, 203, 207, 0.5)',
            borderColor: 'rgba(201, 203, 207, 1)',
            borderWidth: 1
        }]
    };
    
    // Configurar tipo de gráfico según comparación
    const chartType = comparisonType === 'budget' ? 'bar' : 'line';
    
    // Crear o actualizar gráfico
    if (window.comparisonChart) {
        window.comparisonChart.data = data;
        window.comparisonChart.config.type = chartType;
        window.comparisonChart.update();
    } else {
        window.comparisonChart = new Chart(ctx, {
            type: chartType,
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return `$${(value / 1000).toFixed(0)}k`;
                            }
                        }
                    }
                }
            }
        });
        
        // Configurar evento para cambiar tipo de comparación
        document.getElementById('comparison-type').addEventListener('change', function() {
            updateComparisonChart();
        });
    }
}

// Calcular datos financieros
function calculateFinancials() {
    // Calcular ingresos totales
    state.financialData.revenue = state.products.reduce(
        (sum, p) => sum + (p.transactions * p.unitValue), 0
    );
    
    // Calcular costos operativos (30% de ingresos)
    state.financialData.opCosts = state.financialData.revenue * 0.3;
    
    // Calcular gastos generales (20% de ingresos)
    state.financialData.genExpenses = state.financialData.revenue * 0.2;
    
    // Calcular EBITDA
    state.financialData.ebitda = state.financialData.revenue - state.financialData.opCosts - state.financialData.genExpenses;
    
    // Calcular ROI (EBITDA / (Costos + Gastos))
    const totalInvestment = state.financialData.opCosts + state.financialData.genExpenses;
    state.financialData.roi = totalInvestment > 0 
        ? (state.financialData.ebitda / totalInvestment) * 100 
        : 0;
    
    // Ajustar NPS y Churn basado en estrategias activas
    let npsAdjustment = 0;
    let churnAdjustment = 0;
    
    state.strategies.filter(s => s.activa).forEach(strategy => {
        npsAdjustment += strategy.impactoIngresos / 10;
        churnAdjustment -= strategy.impactoIngresos / 20;
    });
    
    state.financialData.nps = Math.min(100, Math.max(0, 50 + npsAdjustment));
    state.financialData.churn = Math.max(0, 5 + churnAdjustment);
}