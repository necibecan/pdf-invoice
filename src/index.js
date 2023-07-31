document
      .getElementById("yazdir")
      .addEventListener("click", function download() {
        const element = document.getElementById("a4");
        html2pdf()
          .from(element)
          .save();
      });