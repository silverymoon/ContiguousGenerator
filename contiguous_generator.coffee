class ContiguousPatternGenerator
  constructor: (form) ->
    @calculate(form)

  calculate: (form) =>
    s_gauge = form.stitch_gauge / 4
    r_gauge = form.row_gauge / 4
    @cast_on = Math.round((form.back_length * s_gauge) + 4)
    @seam_length = Math.round(form.shoulder_seam * r_gauge)

root = exports ? this
root.ContiguousPatternGenerator = ContiguousPatternGenerator


