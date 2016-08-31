// line, curve + form
// Michelle Aphaiyarath

Ribbon ribbon1, r2, r3, r4;
Ribbon[] ribs, ribs2, ribs3;
int count;
float degs;
float rotSpeed = .5;

void setup() {
  size (900, 450);
  count = 3;
  ribbon1 = new Ribbon ();//width / 4, height / 2);
  r4 = new Ribbon (width / 3, 2 * height / 3);
  r2 = new Ribbon (2 * width / 3, height / 3);
  r3 = new Ribbon (2 * width / 3, 2 * height / 3);
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
    ribs[i].display();
    ribs2[i].display();
    ribs3[i].display();
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
  /*
  ribbon1.move();
  r2.move();
  r3.move();
  r4.move();
  */
}