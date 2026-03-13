<template>
  <div class="comparison-warp ptb-100">
    <div class="container">
      <div class="section-title text-center">
        <!-- Kept the section title as per previous premium design -->
        <h2 class="title">TRADITIONAL PATHWAY VS <span class="highlight">GCC School JOURNEY</span></h2>
        <p>See why GCC School Journey is most suited for professional world of new tomorrow.</p>
      </div>

      <div class="table-responsive">
        <table class="table comparison-table">
          <thead>
            <tr>
              <th scope="col" class="feature-col-header">KEY FEATURES</th>
              <th scope="col" class="text-center traditional-header">TRADITIONAL PATHWAY</th>
              <th scope="col" class="text-center gcc-header">
                <!-- Setup placeholder for logo if needed, or just text/logo image provided in design -->
                <div class="d-flex align-items-center justify-content-center gap-2">
                  <!-- Assuming logo asset usage, using text for now if asset path not confirmed, or basic icon -->

                  GCC SCHOOL JOURNEY
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in comparisonData" :key="index" :class="index % 2 === 0 ? 'even-row' : 'odd-row'">
              <td class="feature-name" v-html="item.feature"></td>
              <td class="text-center traditional-cell">
                <span v-if="item.traditional" class="icon-check-green">
                  <i class="ti ti-circle-check"></i>
                </span>
                <span v-else class="icon-cross-red">
                  <i class="ti ti-circle-x"></i>
                </span>
              </td>
              <td class="text-center gcc-cell">
                <span v-if="item.gcc" class="icon-check-gold">
                  <i class="ti ti-circle-check"></i>
                </span>
                <span v-else class="icon-cross-red">
                  <i class="ti ti-circle-x"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentAcademicStudents",
  data() {
    return {
      comparisonData: [
        { feature: "<strong>Globally Recognised</strong> Academic Credentials", traditional: true, gcc: true },
        { feature: "<strong>Strong</strong> Theoretical Foundation", traditional: true, gcc: true },
        { feature: "<strong>Career Commitment</strong> & Confidence from Day 1", traditional: false, gcc: true },
        { feature: "<strong>Get Hired First</strong>, Then Trained", traditional: false, gcc: true },
        { feature: "<strong>Real-time</strong> Industry Environmental Learning", traditional: false, gcc: true },
        { feature: "<strong>Global</strong> Exposure", traditional: false, gcc: true },
        { feature: "<strong>Purpose</strong> Driven Curriculum", traditional: false, gcc: true },
        { feature: "<strong>Elite</strong> Industry Mentors", traditional: false, gcc: true },
        { feature: "<strong>AI-Enabled</strong> Adaptive Learning", traditional: false, gcc: true },
        { feature: "<strong>Employability</strong> Focused Training", traditional: false, gcc: true },
      ],
    };
  },
};
</script>

<style scoped>
.comparison-warp {
  background-color: #EEECF4;
}

.table-responsive {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  overflow: hidden;
}

.comparison-table {
  width: 100%;
  margin-bottom: 0;
  background-color: #fff;
  border-collapse: collapse;
}

.comparison-table th {
  padding: 25px 20px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  vertical-align: middle;
  text-transform: uppercase;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #0d0d25;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.highlight {
  background: linear-gradient(135deg, #F1A63E 0%, #F1A63E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #F1A63E;
}

.feature-col-header {
  background-color: #38003c;
  /* Dark Purple */
  color: #fff;
  width: 40%;
  text-align: left;
  border-top-left-radius: 8px;
  /* Optional, depending on if we want rounded corners on the container */
}

.traditional-header {
  background-color: #474747;
  /* Dark Grey */
  color: #fff;
  width: 30%;
}

.gcc-header {
  background-color: #c89216;
  /* Gold */
  color: #fff;
  width: 30%;
  border-top-right-radius: 8px;
  border: 1.784px solid var(--color-yellow-52, #D4AF37);
  border-bottom: none;
  /* Let cells handle the bottom border or collapse? If collapse, this isn't needed usually, but safe to match style */
}

.comparison-table td {
  padding: 18px 20px;
  vertical-align: middle;
  font-size: 16px;
  color: #333;
  border: 1px solid #e0e0e0;
}

.even-row {
  background-color: #e6e4e9;
  /* Light Greyish Purple */
}

.odd-row {
  background-color: #f5f4f7;
  /* Very Light Grey */
}

.feature-name {
  text-align: left;
  color: #333;
}

.feature-name>>>strong {
  font-weight: 700;
  color: #000;
}


/* Icons */
.icon-check-green i {
  color: #28a745;
  font-size: 24px;
}

.icon-cross-red i {
  color: #dc3545;
  /* Or the burnt orange from design #d9534f */
  color: #cf4f36;
  font-size: 24px;
}

.icon-check-gold i {
  color: #c89216;
  font-size: 24px;
}

/* GCC Column Styling Override if needed */
.gcc-cell {
  background-color: rgba(200, 146, 22, 0.15);
  /* Slight gold tint overlay if wanted, or just rely on row colors */
  /* border-left: 2px solid #c89216;
  border-right: 2px solid #c89216; */
  border: 4px solid var(--color-yellow-52, #D4AF37);
}

/* Make GCC column stand out more like a card effect? Design shows just colored header and rows */
/* The design image shows the GCC column fully distinct? 
   No, it looks like just header and row colors. But GCC column has a slight background tint in the image? 
   Let's check image. Yes, the right column seems slightly darker/tinted.
   We applied a class 'gcc-cell' above.
*/
.gcc-cell {
  background-color: rgba(190, 190, 190, 0.3);
  /* Matches the greyish tint in design */
  border: 1px solid #aaa;
}

/* Wait, the design rows alternate colors across the whole row?
   Looking closely: 
   Row 1: Light Grey
   Row 2: White/Very Light
   GCC Column: Darker box? 
   Actually, the GCC column seems to have a semi-transparent overlay making it look distinct.
   Let's stick to simple alternating rows first, with the GCC header being the main highlight.
*/

/* Reset bordering for cleaner look */
.comparison-table td {
  border: 1px solid #ccc;
}

.gcc-cell {
  background-color: #ccc;
  /* Darker grey background for the whole column as per image? No, image has alternating but GCC column is greyish */
  /* Let's try to match the image: Right column is Grey background, valid items are Gold. */
  background-color: #c4c4c4;
}

.even-row .gcc-cell {
  background-color: #b0b0b0;
  /* Darker grey */
}

.odd-row .gcc-cell {
  background-color: #cccccc;
  /* Lighter grey */
}

/* Re-evaluating image colors:
   Left Col: Light Purple/White alternating.
   Middle Col: Same.
   Right Col: Dark Greyish/Beige box? It separates clearly.
*/


/* Let's refine the colors to match image better */
/* Traditional Cells */
.traditional-cell {
  background-color: #f2f2f2;
  border-right: 1px solid #d6d6d6;
}

.even-row .traditional-cell {
  background-color: #e6e6e6;
}

/* GCC Cells */
.gcc-cell {
  background-color: rgba(200, 146, 22, 0.05) !important;
  border: 2px solid #D4AF37 !important;
}

.even-row {
  background-color: #EEECF4;
}

.odd-row {
  background-color: #ffffff;
}

/* Ensure alternating rows in GCC column also respect the tint but keep border */
.even-row .gcc-cell {
  background-color: rgba(200, 146, 22, 0.08) !important;
}

.odd-row .gcc-cell {
  background-color: rgba(255, 255, 255, 1) !important;
}

/* Last cell border fix */
tr:last-child .gcc-cell {
  border-bottom: 2px solid #D4AF37 !important;
}

/* Remove border if using background differentiation */
.comparison-table td {
  border: 1px solid #bbb;
}

@media (max-width : 768px) {




  .comparison-table th {
    padding: 15px 10px;
    font-size: 14px;
    white-space: nowrap;
    /* Keep headers from breaking awkwardly */
  }

  .comparison-table td {
    padding: 10px;
    font-size: 14px;
  }

  .feature-col-header {
    width: auto;
    /* Allow auto width on mobile */
    min-width: 40%;
  }

  .traditional-header,
  .gcc-header {
    width: auto;
    min-width: 25%;
  }

  .title {
    font-size: 26px;
  }
}

@media (max-width : 575px) {
  .comparison-table {
    min-width: 400px;
    /* Ensure table doesn't squash too much */
  }

  .comparison-table th {
    font-size: 10px;
  }

}


@media (max-width : 425px) {
  .comparison-table {
    min-width: 350px;
    /* Ensure table doesn't squash too much */
  }

  .comparison-table th {
    font-size: 8px;
  }

  .comparison-table td {
    font-size: 12px;
  }

  .gcc-header img {
    width: 500px;
  }

}
</style>
