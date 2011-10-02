(function() {
  var ContiguousPatternGenerator, root;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  ContiguousPatternGenerator = (function() {
    function ContiguousPatternGenerator(form) {
      this.calculate = __bind(this.calculate, this);      this.calculate(form);
    }
    ContiguousPatternGenerator.prototype.calculate = function(form) {
      var r_gauge, s_gauge;
      s_gauge = form.stitch_gauge / 4;
      r_gauge = form.row_gauge / 4;
      this.cast_on = Math.round((form.back_length * s_gauge) + 4);
      return this.seam_length = Math.round(form.shoulder_seam * r_gauge);
    };
    return ContiguousPatternGenerator;
  })();
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.ContiguousPatternGenerator = ContiguousPatternGenerator;
}).call(this);
