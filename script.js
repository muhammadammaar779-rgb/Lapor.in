document.getElementById("laporForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Laporan berhasil dikirim secara anonim");
  this.reset();
});
