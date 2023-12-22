document.getElementById("copy-icon").addEventListener("click", function() {
  
var storedCode = localStorage.getItem('wajan');
var pagelink = window.location.origin + window.location.pathname;
var link = pagelink + "#" + storedCode;
  navigator.clipboard.writeText(link)
    .then(function() {
      document.getElementById('copy-message').textContent = 'Tersalin!';
setTimeout(function() {
      document.getElementById('copy-message').textContent = 'Salin link artikel ini';
    }, 3500);
    })
    .catch(function(error) {
	document.getElementById('copy-message').textContent = 'Failed to copy link to clipboard';
      console.error("Failed to copy link to clipboard:", error);
    });
});


// Get the fragment identifier from the URL
var fragmentIdentifier = window.location.hash;

// Remove the "#" symbol from the fragment identifier
var id = fragmentIdentifier.substring(1);

switch (id) {
               case 'rendang':
	// Menghapus kode sebelumnya dari local storage
	localStorage.removeItem('wajan');

	// Mengirim kode "rendang" ke local storage
	localStorage.setItem('wajan', 'rendang');
                   break;
               case 'bika':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'bika');
                   break;
               case 'pempek':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'pempek');
                   break;
               case 'rawon':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'rawon');
                   break;
               case 'kerakTelor':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'kerakTelor');
                   break;
               case 'tempeMendoan':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'tempeMendoan');
                   break;
               case 'ayamTaliwang':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'ayamTaliwang');
                   break;
               case 'seiSapi':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'seiSapi');
                   break;
               case 'sayurDaunUbi':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'sayurDaunUbi');
                   break;
               case 'hekeng':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'hekeng');
                   break;
               case 'ganganManok':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'ganganManok');
                   break;
               case 'pansoh':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'pansoh');
                   break;
               case 'conro':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'conro');
                   break;
               case 'Kaledo':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'Kaledo');
                   break;
               case 'binteBiluhuta':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'binteBiluhuta');
                   break;
               case 'airGuraka':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'airGuraka');
                   break;
               case 'papeda':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'papeda');
                   break;
               case 'nasiLapola':
    // Menghapus kode sebelumnya dari local storage
    localStorage.removeItem('wajan');

    // Mengirim kode "rendang" ke local storage
    localStorage.setItem('wajan', 'nasiLapola');
                   break;
               default:
                   break;
           }
