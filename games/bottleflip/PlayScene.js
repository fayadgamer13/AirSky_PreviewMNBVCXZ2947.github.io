function _0x5b56(_0x40877f, _0x210b1b) {
  const _0x5c689e = _0x5c68();
  return (
    (_0x5b56 = function (_0x5b56ec, _0x39f128) {
      _0x5b56ec = _0x5b56ec - 0x151;
      let _0x15a700 = _0x5c689e[_0x5b56ec];
      return _0x15a700;
    }),
    _0x5b56(_0x40877f, _0x210b1b)
  );
}
const _0x4beb43 = _0x5b56;
function _0x5c68() {
  const _0x59d94d = [
    "addScoreText",
    "create",
    "pointerout",
    "input",
    "hideLoadingScreen",
    "velocity",
    "addBody",
    "image",
    "56sosBJv",
    "displayHeight",
    "loading_page",
    "scale",
    "idle",
    "100px",
    "60px",
    "scale(",
    "cursorController",
    "scoreText",
    "29645341bqPzQy",
    "flip",
    "isTouched",
    "delayedCall",
    "getValue",
    "preload",
    "background",
    "hover",
    "addBottle",
    "restart",
    "destroy",
    "setOrigin",
    "addBackground",
    "13972vFnFKj",
    "scene",
    "12mGLuED",
    "dragstart",
    "text",
    "123xtnEuU",
    "displayWidth",
    "style",
    "setScale",
    "TEST",
    "PlayScene",
    "config",
    "2243262MXRbFJ",
    "getElementById",
    "hasFlippedInAir",
    "addBestScoreText",
    "Arial,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
    "pointerover",
    "82865WkCizD",
    "Georgia,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
    "./assets/floor.png",
    "addBodies",
    "getItem",
    "load",
    "Scene",
    "bestScore",
    "time",
    "10krRXjv",
    "add",
    "floor",
    "isStanding",
    "rectangle",
    "game",
    "body",
    "hitFloor",
    "2383719dHygHq",
    "canFlip",
    "dragend",
    "height",
    "bottle",
    "3576ItqNaA",
    "update",
    "7735788pxFTtZ",
    "startDragY",
    "7586hSJGYY",
    "tweens",
    "visible",
    "SCORE:\x20",
    "handleCollide",
    "bestScoreText",
    "log",
    "matter",
    "Back.in",
    "startOpenAnimTween",
    "Back.out",
    "soft",
    "setItem",
    "transform",
    "addDragEvents",
    "remove",
    "BEST:\x20",
    "resize",
  ];
  _0x5c68 = function () {
    return _0x59d94d;
  };
  return _0x5c68();
}
(function (_0xb76f6a, _0x16e4af) {
  const _0x49abf0 = _0x5b56,
    _0x27419b = _0xb76f6a();
  while (!![]) {
    try {
      const _0x1bc0b2 =
        (-parseInt(_0x49abf0(0x166)) / 0x1) *
          (-parseInt(_0x49abf0(0x18d)) / 0x2) +
        -parseInt(_0x49abf0(0x184)) / 0x3 +
        (parseInt(_0x49abf0(0x1a7)) / 0x4) *
          (parseInt(_0x49abf0(0x173)) / 0x5) +
        -parseInt(_0x49abf0(0x16d)) / 0x6 +
        (-parseInt(_0x49abf0(0x161)) / 0x7) *
          (parseInt(_0x49abf0(0x189)) / 0x8) +
        (-parseInt(_0x49abf0(0x18b)) / 0x9) *
          (parseInt(_0x49abf0(0x17c)) / 0xa) +
        (-parseInt(_0x49abf0(0x154)) / 0xb) *
          (-parseInt(_0x49abf0(0x163)) / 0xc);
      if (_0x1bc0b2 === _0x16e4af) break;
      else _0x27419b["push"](_0x27419b["shift"]());
    } catch (_0x2f288c) {
      _0x27419b["push"](_0x27419b["shift"]());
    }
  }
})(_0x5c68, 0x73936);
let score = 0x0,
  bestScore = Number(localStorage[_0x4beb43(0x177)]("bestScore")) || 0x0;
class PlayScene extends Phaser[_0x4beb43(0x179)] {
  constructor() {
    const _0x70dc1f = _0x4beb43;
    super(_0x70dc1f(0x16b));
  }
  [_0x4beb43(0x159)]() {
    const _0x28e290 = _0x4beb43;
    this[_0x28e290(0x178)][_0x28e290(0x1a6)](
      "background",
      "./assets/background.png"
    ),
      this[_0x28e290(0x178)][_0x28e290(0x1a6)](
        _0x28e290(0x188),
        "./assets/bottle.png"
      ),
      this[_0x28e290(0x178)][_0x28e290(0x1a6)](
        _0x28e290(0x17e),
        _0x28e290(0x175)
      );
  }
  [_0x4beb43(0x1a0)](_0x3f2cf6) {
    const _0x30898a = _0x4beb43;
    (this["gw"] = this[_0x30898a(0x181)]["config"]["width"]),
      (this["gh"] = this[_0x30898a(0x181)][_0x30898a(0x16c)][_0x30898a(0x187)]),
      (this[_0x30898a(0x18c)] = 0x0),
      (this[_0x30898a(0x152)] = new CursorController(this)),
      (this[_0x30898a(0x15a)] = this["addBackground"]()),
      (this[_0x30898a(0x153)] = this[_0x30898a(0x19f)]()),
      (this[_0x30898a(0x192)] = this["addBestScoreText"]()),
      (this[_0x30898a(0x17e)] = this["addFloor"]()),
      (this[_0x30898a(0x188)] = this["addBottle"]()),
      this[_0x30898a(0x19b)]();
    const _0x5d28c7 = () => {
      const _0x3b0784 = _0x30898a;
      _0x3f2cf6 != _0x3b0784(0x198)
        ? this[_0x3b0784(0x196)]()
        : this["bottle"]["createTween"](() => {
            const _0xee85ed = _0x3b0784;
            this[_0xee85ed(0x176)](), this[_0xee85ed(0x191)]();
          });
    };
    _0x3f2cf6 != _0x30898a(0x198)
      ? this[_0x30898a(0x1a3)](_0x5d28c7)
      : _0x5d28c7();
  }
  [_0x4beb43(0x18a)]() {
    const _0x578a4b = _0x4beb43;
    Math["abs"](this["bottle"]["angle"]) > 0xa0 &&
      (this[_0x578a4b(0x188)][_0x578a4b(0x16f)] = !![]);
  }
  [_0x4beb43(0x160)]() {
    const _0x1ad5ac = _0x4beb43;
    return this["add"]
      [_0x1ad5ac(0x1a6)](0x0, 0x0, _0x1ad5ac(0x15a))
      [_0x1ad5ac(0x15f)](0x0, 0x0)
      ["setDisplaySize"](this["gw"], this["gh"]);
  }
  ["addScoreText"]() {
    const _0x39bd0e = _0x4beb43,
      _0x533839 = { fontFamily: _0x39bd0e(0x171), fontSize: _0x39bd0e(0x1ad) };
    return this[_0x39bd0e(0x17d)]
      [_0x39bd0e(0x165)](0xa, 0xa, _0x39bd0e(0x190) + score, _0x533839)
      [_0x39bd0e(0x15f)](0x0, 0x0);
  }
  [_0x4beb43(0x170)]() {
    const _0x376b18 = _0x4beb43,
      _0x435a7c = { fontFamily: _0x376b18(0x171), fontSize: _0x376b18(0x1ad) };
    return this[_0x376b18(0x17d)]
      [_0x376b18(0x165)](
        this["gw"] - 0xa,
        0xa,
        _0x376b18(0x19d) + bestScore,
        _0x435a7c
      )
      [_0x376b18(0x15f)](0x1, 0x0);
  }
  ["addFloor"]() {
    const _0x271b5b = _0x4beb43,
      _0x5f5c20 = this[_0x271b5b(0x17d)]
        [_0x271b5b(0x1a6)](0x1cc, this["gh"], _0x271b5b(0x17e))
        [_0x271b5b(0x15f)](0.5, 0x1);
    return (_0x5f5c20[_0x271b5b(0x18f)] = ![]), _0x5f5c20;
  }
  [_0x4beb43(0x15c)]() {
    const _0x40c4d4 = _0x4beb43,
      _0x17b395 = new Bottle(
        this,
        this["gw"] / 0x2,
        this[_0x40c4d4(0x17e)]["y"],
        _0x40c4d4(0x188)
      );
    return (
      (_0x17b395["y"] -= _0x17b395[_0x40c4d4(0x187)] / 0x2 + 0x92),
      this["input"]["setDraggable"](_0x17b395),
      _0x17b395["on"](_0x40c4d4(0x172), (_0x1d97a8) => {
        const _0x307fbe = _0x40c4d4;
        if (!this[_0x307fbe(0x188)][_0x307fbe(0x185)]) return;
        this[_0x307fbe(0x152)]["indicator"]();
      }),
      _0x17b395["on"](_0x40c4d4(0x1a1), (_0x316ad7) => {
        const _0x1dbdba = _0x40c4d4;
        if (!this[_0x1dbdba(0x188)][_0x1dbdba(0x185)]) return;
        this[_0x1dbdba(0x152)][_0x1dbdba(0x1ab)]();
      }),
      _0x17b395
    );
  }
  [_0x4beb43(0x183)]() {
    const _0x2e267a = _0x4beb43;
    this[_0x2e267a(0x188)][_0x2e267a(0x17f)]() &&
      this["bottle"]["isTouched"] &&
      ((this[_0x2e267a(0x188)][_0x2e267a(0x156)] = ![]),
      this["time"][_0x2e267a(0x157)](0x7d0, () => {
        const _0x381bfc = _0x2e267a;
        if (this[_0x381bfc(0x188)][_0x381bfc(0x17f)]())
          this[_0x381bfc(0x188)][_0x381bfc(0x16f)] && score++,
            score > bestScore &&
              ((bestScore = score),
              localStorage[_0x381bfc(0x199)](_0x381bfc(0x17a), bestScore)),
            this[_0x381bfc(0x162)][_0x381bfc(0x15d)](_0x381bfc(0x198));
        else
          this["bottle"][_0x381bfc(0x182)]["velocity"]["y"] === 0x0 &&
            this["bottle"][_0x381bfc(0x156)] &&
            this[_0x381bfc(0x162)][_0x381bfc(0x15d)](_0x381bfc(0x198));
      })),
      this[_0x2e267a(0x188)]["body"][_0x2e267a(0x1a4)]["y"] === 0x0 &&
        this[_0x2e267a(0x188)]["isTouched"] &&
        this[_0x2e267a(0x162)][_0x2e267a(0x15d)]("soft");
  }
  [_0x4beb43(0x19b)]() {
    const _0x5ccc3c = _0x4beb43;
    this[_0x5ccc3c(0x1a2)]["on"](_0x5ccc3c(0x15b), (_0x20a2aa) =>
      console[_0x5ccc3c(0x193)](0xd3ed78e)
    ),
      this[_0x5ccc3c(0x1a2)]["on"](
        _0x5ccc3c(0x164),
        (_0x3c1d2c) => (
          this[_0x5ccc3c(0x152)]["grab"](),
          (this[_0x5ccc3c(0x18c)] = _0x3c1d2c["y"])
        )
      ),
      this[_0x5ccc3c(0x1a2)]["on"](_0x5ccc3c(0x186), (_0x10a144) => {
        const _0xcbfd37 = _0x5ccc3c;
        this[_0xcbfd37(0x152)][_0xcbfd37(0x1ab)](),
          this["bottle"][_0xcbfd37(0x155)](_0x10a144["y"]),
          (this[_0xcbfd37(0x188)]["isTouched"] = !![]);
      });
  }
  ["addBodies"]() {
    const _0x36e39c = _0x4beb43;
    this[_0x36e39c(0x188)][_0x36e39c(0x1a5)](),
      (this["floorBody"] = this[_0x36e39c(0x194)]["add"][_0x36e39c(0x180)](
        this["gw"] / 0x2,
        this["gh"] - 0x28,
        this["floor"][_0x36e39c(0x167)],
        this[_0x36e39c(0x17e)][_0x36e39c(0x1a8)],
        { isStatic: !![] }
      ));
  }
  [_0x4beb43(0x191)]() {
    const _0x4ba784 = _0x4beb43;
    this["bottle"]["setOnCollideActive"](() => this[_0x4ba784(0x183)]());
  }
  [_0x4beb43(0x196)]() {
    const _0x44e85b = _0x4beb43;
    this["bottle"][_0x44e85b(0x169)](0.1),
      this[_0x44e85b(0x17e)][_0x44e85b(0x169)](0.1),
      this[_0x44e85b(0x153)]["setScale"](0.1),
      this["bestScoreText"][_0x44e85b(0x169)](0.1),
      this[_0x44e85b(0x18e)][_0x44e85b(0x17d)]({
        targets: this[_0x44e85b(0x188)],
        ease: _0x44e85b(0x197),
        duration: 0x3e8,
        scale: 0x1,
        onComplete: () => {
          const _0x29e6c0 = _0x44e85b;
          (this[_0x29e6c0(0x188)][_0x29e6c0(0x185)] = !![]),
            this["addBodies"](),
            this[_0x29e6c0(0x191)]();
        },
      }),
      this[_0x44e85b(0x18e)][_0x44e85b(0x17d)]({
        targets: this[_0x44e85b(0x17e)],
        ease: _0x44e85b(0x197),
        duration: 0x320,
        scale: 0x1,
      }),
      this[_0x44e85b(0x18e)][_0x44e85b(0x17d)]({
        targets: [this["bestScoreText"], this[_0x44e85b(0x153)]],
        ease: "Back.out",
        duration: 0x2bc,
        scale: 0x1,
      });
  }
  [_0x4beb43(0x1a3)](_0x2d6cab) {
    const _0x20a7d7 = _0x4beb43,
      _0x2bb1e3 = document[_0x20a7d7(0x16e)](_0x20a7d7(0x1a9));
    this["tweens"]["add"]({
      targets: _0x2bb1e3,
      scale: { from: 0x1, to: 0x0 },
      ease: _0x20a7d7(0x195),
      duration: 0x258,
      onUpdate: (_0xea3ffe) => {
        const _0x39f553 = _0x20a7d7,
          _0x11dd95 = _0xea3ffe[_0x39f553(0x158)]();
        _0x2bb1e3[_0x39f553(0x168)][_0x39f553(0x19a)] =
          _0x39f553(0x151) + _0x11dd95 + ")";
      },
      onComplete: () => {
        const _0x535131 = _0x20a7d7;
        _0x2d6cab(),
          _0x2bb1e3[_0x535131(0x19c)](),
          this[_0x535131(0x1aa)][_0x535131(0x19e)](this["gw"], this["gh"]);
      },
    });
  }
  ["addTestMode"]() {
    const _0x340451 = _0x4beb43,
      _0x25ceff = { fontFamily: _0x340451(0x174), fontSize: _0x340451(0x1ac) };
    this[_0x340451(0x17d)]
      [_0x340451(0x165)](
        this["gw"] / 0x2,
        this["gh"] / 0x2 - 0x64,
        _0x340451(0x16a),
        _0x25ceff
      )
      [_0x340451(0x15f)](0x0, 0x0),
      this[_0x340451(0x17d)]
        [_0x340451(0x165)](
          this["gw"] / 0x2,
          this["gh"] / 0x2 + 0x64,
          "TEST",
          _0x25ceff
        )
        [_0x340451(0x15f)](0x0, 0x0),
      this[_0x340451(0x17b)][_0x340451(0x157)](0x2328, () => {
        const _0x2a95ab = _0x340451;
        console[_0x2a95ab(0x193)]("DESTROYED"),
          this[_0x2a95ab(0x15a)][_0x2a95ab(0x15e)](),
          this[_0x2a95ab(0x188)][_0x2a95ab(0x15e)]();
      });
  }
}
