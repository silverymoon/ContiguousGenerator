(function() {
  var ContiguousPatternGenerator, root;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  ContiguousPatternGenerator = (function() {
    function ContiguousPatternGenerator(form) {
      this.calculate = __bind(this.calculate, this);      this.calculate(form);
    }
    ContiguousPatternGenerator.prototype.calculate = function(form) {
      var armhole_rows, r_gauge, s_gauge;
      s_gauge = form.stitch_gauge / 4;
      r_gauge = form.row_gauge / 4;
      this.back_st = Math.round(form.back_length * s_gauge);
      this.cast_on = this.back_st + 4;
      this.seam_length = Math.round(form.shoulder_seam * r_gauge);
      armhole_rows = form.armhole_length * r_gauge;
      this.one_sixth_arm_hole = Math.round(armhole_rows / 6);
      this.arm_hole_minus_one_inch_and_sixth = Math.round(armhole_rows - (this.one_sixth_arm_hole + r_gauge));
      this.num_body_stitches = Math.round(s_gauge * form.bust_size);
      this.r_gauge_in_inches = Math.round(r_gauge);
      return this.s_gauge_in_inches = Math.round(s_gauge);
    };
    return ContiguousPatternGenerator;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.ContiguousPatternGenerator = ContiguousPatternGenerator;
}).call(this);
