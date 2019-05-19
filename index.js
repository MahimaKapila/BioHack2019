$(document).ready(function(){
  var female_height = $("#female-height");
  var female_weight = $("#female-weight");
  var female_Neck_Circumference = $("#female-Neck-Circumference");
  var female_waist = $("#female-waist");
  var female_hips = $("#female-hips");

  var male_height = $("#male-height");
  var male_weight = $("#male-weight");
  var male_Neck_Circumference = $("#male-Neck-Circumference");
  var male_abdominal = $("#male-abdominal");

  var calculate_button = $("#calculate-button");
  var clear_button = $("#clear-button");

  var percent = $("#percent");

  /*
  Formulas:
  A) Height, B) Neck Circumference, C) Waist, and D) Hips
  Female Fat% = 163.205 × Log10(C + D - B) - 97.684 × Log10(A) - 78.387
  Male Fat% = 86.01 × Log10(C - B) - 70.041 × Log10(A) + 36.76
  source: https://caloriebee.com/diets/Five-Methods-to-Calculate-your-Body-Fat-Percentage-by-Using-a-Tape-Measure
  */

  calculate_button.click(function(){
    var fat_percent = 0;
    if (female_height.val() != "") {

      let female_waist_value = parseFloat(female_waist.val());
      let female_hips_value = parseFloat(female_hips.val());
      let female_Neck_Circumference_value = parseFloat(female_Neck_Circumference.val());
      let female_height_value = parseFloat(female_height.val());

      var circumferenceFemale = female_waist_value + female_hips_value - female_Neck_Circumference_value;
      fat_percent = 163.205 * Math.log10(circumferenceFemale) - (97.684 * Math.log10(female_height_value)) - 78.387;
    }
    else if (male_height.val() != "") {

      let male_abdominal_value = parseFloat(male_abdominal.val());
      let male_Neck_Circumference_value = parseFloat(male_Neck_Circumference.val());
      let male_height_value = parseFloat(male_height.val());

      var circumferenceMale = male_abdominal_value - male_Neck_Circumference_value;
      fat_percent = 86.01 * Math.log10(circumferenceMale) - (70.041 * Math.log10(male_height_value)) + 36.76;
    }

    percent.html(parseInt(fat_percent));
    $('html, body').animate({scrollTop: 1000}, 1000);
  });

  clear_button.click(function() {
    $('input').val("");
  });

});
