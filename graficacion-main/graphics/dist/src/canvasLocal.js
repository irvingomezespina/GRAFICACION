export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }

    // Transformación para centrar y ajustar coordenadas (opcional, pero ayuda)
    // En este caso, usaremos coordenadas directas del canvas para simplificar
    iX(x) { return Math.round(x); }
    iY(y) { return this.maxY - Math.round(y); } // Invierte el eje Y para que suba

    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.stroke();
    }

   paint() {

    let radius = Math.min(this.maxX, this.maxY) * 0.4;
    let centerX = this.centerX;
    let centerY = this.centerY;

    // Dibujar el círculo
    this.graphics.beginPath();
    this.graphics.arc(centerX, centerY, radius, 0, Math.PI * 2);
    this.graphics.stroke();

    // Número de líneas
    let lines = 40;

    for (let i = 0; i < lines; i++) {

        let angle = (2 * Math.PI / lines) * i;

        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);

        this.drawLine(centerX, centerY, x, y);
    }
}
}
