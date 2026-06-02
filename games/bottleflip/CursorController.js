class CursorController {
  constructor(scene) {
    this.scene = scene;
    this.idle();
  }

  idle() {
    this.changeTexture("pointer");
  }

  indicator() {
    this.changeTexture("point_pointer");
  }

  grab() {
    this.changeTexture("grab_pointer");
  }

  changeTexture(textureKey) {
    this.scene.input.setDefaultCursor(
      `url("/assets/${textureKey}.png"), pointer`
    );
  }
}
