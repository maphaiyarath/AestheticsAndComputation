// line, curve + form
// Michelle Aphaiyarath

// concept: ribbon falling
//           while twirling down, alternates btwn 2d + 3d

Ribbon rib;
float degs;
float rotSpeed = 1;

void setup() {
  background (255);
  size (400, 600);
  rib = new Ribbon ((width / 2), 5, 10, (height - 10));
}

void draw() {
  rib.display();
  rib.move();
  translate (width / 2, height / 2);
  rotate (radians (degs));
  degs += rotSpeed;
  int curve = int (random (360));
  line (0, 0, 100, curve);
}