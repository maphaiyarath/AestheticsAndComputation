class Ribbon {
  int x, y, w, len;
  
  Ribbon() {
  }
  
  Ribbon (int x, int y, int w, int len) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.len = len;
  }
  
  void display() {
    stroke (0);
    strokeWeight (1);
    noFill();
    rect (x, y, w, len);
  }
  
  void move() {
    //
  }
}