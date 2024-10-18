class CuentaBancaria {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
        this.ITF = 0.005; 
    }

    deposito(monto) {
        if (monto <= 0) {
            return "El monto debe ser mayor que 0.";
        }
        const itf = monto * this.ITF;
        this.saldo += (monto - itf);
        return `Depósito: ${monto.toFixed(2)}, ITF: ${itf.toFixed(2)}, Saldo Actual: ${this.saldo.toFixed(2)}`;
    }

    retiro(monto) {
        if (monto <= 0 || monto > this.saldo) {
            return "Monto inválido o saldo insuficiente.";
        }
        const itf = monto * this.ITF;
        this.saldo -= (monto + itf);
        return `Retiro: ${monto.toFixed(2)}, ITF: ${itf.toFixed(2)}, Saldo Actual: ${this.saldo.toFixed(2)}`;
    }

    verSaldo() {
        return `Saldo Actual: ${this.saldo.toFixed(2)}`;
    }
}

// Instancia de la cuenta
const cuenta = new CuentaBancaria("Juan Pérez");

function realizarDeposito() {
    const monto = parseFloat(document.getElementById('monto').value);
    const resultado = cuenta.deposito(monto);
    mostrarResultado(resultado);
}

function realizarRetiro() {
    const monto = parseFloat(document.getElementById('monto').value);
    const resultado = cuenta.retiro(monto);
    mostrarResultado(resultado);
}

function verSaldo() {
    const resultado = cuenta.verSaldo();
    mostrarResultado(resultado);
}

function mostrarResultado(mensaje) {
    document.getElementById('resultado').innerText = mensaje;
}
