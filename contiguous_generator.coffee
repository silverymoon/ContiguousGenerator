class ContiguousPatternGenerator
  constructor: (form) ->
    @calculate(form)

  calculate: (form) =>
    s_gauge = form.stitch_gauge / 4
    r_gauge = form.row_gauge / 4
    @back_st = Math.round(form.back_length * s_gauge)
    @cast_on = @back_st + 4
    @seam_length = Math.round(form.shoulder_seam * r_gauge)
    armhole_rows = form.armhole_length * r_gauge
    @one_sixth_arm_hole = Math.round(armhole_rows / 6)
    @arm_hole_minus_one_inch_and_sixth = Math.round(armhole_rows - (@one_sixth_arm_hole + r_gauge))
    @num_body_stitches = Math.round(s_gauge * form.bust_size)
    @r_gauge_in_inches = Math.round(r_gauge)
    @s_gauge_in_inches = Math.round(s_gauge)

root = exports ? this
root.ContiguousPatternGenerator = ContiguousPatternGenerator
