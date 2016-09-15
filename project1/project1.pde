// line, curve + form
// Michelle Aphaiyarath

// rotate?

Ribbon ribbon1, r2, r3, r4;
Ribbon[] ribs, ribs2, ribs3;
int count;
float degs;
float rotSpeed = .5;

void setup() {
  size (900, 450);
  count = 3;
  ribs = new Ribbon[count];
  ribs2 = new Ribbon[count];
  ribs3 = new Ribbon[count];
  for (int i = 0; i < count; i++) {
    ribs[i] = new Ribbon (((i + 1) * width / 4), height / 4);
    ribs2[i] = new Ribbon (((i + 1) * width / 4), height / 2);
    ribs3[i] = new Ribbon (((i + 1) * width / 4), 3 * height / 4);
  }
}

void draw() {
  background (255);
  for (int i = 0; i < count; i++) {
    ribs[i].display (0);
    ribs2[i].display (170);
    ribs3[i].display (85);
  }
  /*
  pushMatrix();
  translate (width / 5, height / 2);
  rotate (radians (degs));
  degs += rotSpeed;
  ribbon1.display();
  popMatrix();
  pushMatrix();
  translate (2 * width / 5, height / 2);
  rotate (radians (degs));
  degs += rotSpeed;
  r2.display();
  popMatrix();
  pushMatrix();
  translate (3 * width / 5, height / 2);
  rotate (radians (degs));
  degs += rotSpeed;
  r3.display();
  popMatrix();
  pushMatrix();
  translate (4 * width / 5, height / 2);
  rotate (radians (degs));
  degs += rotSpeed;
  r4.display();
  popMatrix();
  */
}