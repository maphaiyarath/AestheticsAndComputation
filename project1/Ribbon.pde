class Ribbon {
  int x, y, xOff, yOff, grayscale;
  
  Ribbon() {
    x = 120;
    y = 10;
  }
  
  Ribbon (int x, int y) {
    this.x = x;
    this.y = y;
  }
  
  void display (int grayscale) {
    stroke (grayscale);
    strokeWeight (1);
    noFill();
    beginShape();
    vertex(x, y);
    bezierVertex(x + 80, y + 0, 80, 75, x + 30, y + 75);
    bezierVertex(x + 50, y + 80, 60, 25, x, y);
    endShape();
  }
  
  void move() {
    yOff = 1;
    y += yOff;
    if (y >= height || y <= 0) { // || y >= 0) {
        // y += yOff;
        yOff *= -1;
    }
  }
}