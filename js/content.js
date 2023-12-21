
      window.addEventListener('DOMContentLoaded', function() {
           // Membaca kode dari local storage
           var storedCode = localStorage.getItem('wajan');
           
           // Mengganti konten elemen berdasarkan kode yang dibaca
           switch (storedCode) {
               case 'rendang':
                //rendang
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/rendang.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/rendang.png')";
                   document.getElementById('imgsrc').src = './asset/card/rendang.jpg';
                   document.getElementById('title').textContent = 'Rendang';
                   document.getElementById('judul').textContent = 'Rendang';
                   document.getElementById('pembuatan').textContent = 'Untuk membuat rendang, potong daging sapi menjadi potongan kecil dan masak dalam santan kental yang telah disiapkan sebelumnya. Tambahkan bumbu rempah seperti serai yang sudah dimemarkan, jahe yang diparut, bawang putih dan bawang merah yang diiris halus, cabai merah sesuai selera, serta daun jeruk purut untuk aroma segar. Biarkan rendang mendidih dengan api kecil hingga santan menyusut dan bumbu meresap sempurna, membuat daging menjadi empuk dan berwarna kecokelatan gelap.';
                   document.getElementById('keterangan').textContent = 'Rendang Rendang (Minangkabau: randang; Jawi: رندڠ) adalah hidangan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna cokelat terang keemasan.';

                   document.getElementById('keunikan').textContent = 'Proses memasak Rendang yang menggunakan rempah-rempah kaya dan bahan-bahan seperti serai, cabai, dan santan, membantu dalam pengawetan daging sapi. Dalam masa lalu, Rendang diolah dalam jumlah besar dan disimpan dalam wadah-wadah tertutup yang dikeringkan, sehingga dapat bertahan selama berbulan-bulan.Selain itu, Rendang juga memiliki nilai budaya yang kuat dalam masyarakat Minangkabau. Makanan ini sering disajikan dalam acara-acara adat, seperti pernikahan, khitanan, dan upacara adat lainnya. Rendang menjadi simbol kemurahan hati, kekayaan, dan keramahan dalam budaya Minangkabau. Hidangan ini juga menjadi hidangan istimewa pada perayaan Idul Fitri di masyarakat Minangkabau.';

                   document.getElementById('citaRasa').textContent = 'Proses memasak Rendang membutuhkan waktu yang cukup lama dengan membiarkan daging meresap semua rempah-rempah dan bumbu, sehingga menghasilkan cita rasa yang kaya dan kompleks. Rendang memiliki rasa pedas yang khas, disertai dengan sentuhan manis dari santan dan rempah-rempah yang kaya. Tekstur daging yang lembut dan kuah yang kental membuat Rendang menjadi hidangan yang sangat populer di Indonesia dan diakui secara internasional sebagai salah satu makanan terenak di dunia.';

                   document.getElementById('sejarah').textContent = 'Sejarah Kerajaan Pagaruyung dimulai pada abad ke-14 dan mencapai puncak kejayaannya pada abad ke-16. Selama masa kejayaannya, Kerajaan Pagaruyung mengalami perkembangan ekonomi dan perdagangan yang pesat. Daerah ini merupakan daerah yang subur, terutama dalam hal pertanian dan peternakan, termasuk peternakan sapi.Dalam konteks ini, Rendang muncul sebagai hidangan yang menggunakan daging sapi sebagai bahan utamanya. Dalam masa kejayaan Kerajaan Pagaruyung, daging sapi dianggap sebagai simbol kemakmuran dan kekayaan. Rendang menjadi cara yang efektif untuk mengolah daging sapi agar tahan lama dan dapat disimpan dalam waktu yang cukup lama, sehingga cocok untuk kebutuhan kerajaan yang memiliki tamu-tamu istimewa.';
                   break;

            
               case 'bika':
                //bika
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/bika.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/bika.png')";
                   document.getElementById('imgsrc').src = './asset/card/bika.png';
                   document.getElementById('title').textContent = 'Bika Ambon';
                   document.getElementById('judul').textContent = 'Bika Ambon';
                   document.getElementById('pembuatan').textContent = 'Untuk membuat kue Bika Ambon, campurkan tepung beras yang halus dengan santan kental, gula aren, telur, dan ragi. Aduk hingga merata dan biarkan adonan tersebut mengalami proses fermentasi semalam agar mendapatkan tekstur yang kenyal dan rasa yang khas. Setelah itu, panggang dalam oven dengan suhu yang tepat hingga matang sempurna dan permukaannya berwarna keemasan.';
                   document.getElementById('keterangan').textContent = 'Bika Ambon adalah kue tradisional khas Medan, Indonesia. Kue ini terbuat dari bahan-bahan seperti tepung tapioka, telur, gula, dan santan. Bika ambon dimasak selama 12 jam agar dapat bertahan dalam kondisi terbaik dan sesuai apa yang diinginkan selama empat hari karena setelahnya kue tersebut mulai mengeras. Kue basah ini biasanya memiliki jaring-jaring pada bagian dalam. Bika ambon juga dijual dengan berbagai macam rasa, seperti pandan, coklat, keju, dan lain-lain';

                   document.getElementById('keunikan').textContent = 'Bika ambon menggunakan santan dalam proses pembuatannya, dan dimasak untuk waktu yang cukup lama tetapi cenderung tidak bertahan lama.';

                   document.getElementById('citaRasa').textContent = 'Bika ambon memiliki rasa yang tergolong tidak terlalu manis untuk ukuran kue manis. Teksturnya lembut dan sedikit kenyal. Bika ambon juga memiliki sedikit rasa gurih didalamnya karena penggunaan santan untuk membuat adonannya';

                   document.getElementById('sejarah').textContent = 'Menganalisa sejarah penamaan Bika Ambon dalam berbagai versi: 1.  Berdasarkan Bahasa. Menurutnya, Ambon bukanlah istilah yang menyatakan nama jalan tempat Bika Ambon ini populer, asal orang yang membawa Bika Ambon ini, atau akronim nama daerah asal Bika Ambon, tetapi istilah tersebut dalam bahasa Medan berarti lembut. 2. Cerita yang pertama mengatakan, Bika Ambon dinamai demikian karena tempat pertama kali dijual dan popularnya Bika Ambon adalah di simpang Jl. Ambon Sei Kera Medan. Kemudian sumber lain mengatakan, nama Bika Ambon berasal dari seorang warga Ambon yang merantau ke Malaysia dengan membawa kue bika. Setelah tahu rasanya enak, orang tersebut tidak kembali ke Ambon lagi, tetapi singgah di Medan. Sehingga sejak empat puluh tahun lalu Bika Ambon jadi sangat terkenal di Medan. 3. Cerita yang lain lagi mengatakan, bahwa dahulu ada sebuah daerah bernama Amplas yang kemudian dibagi menjadi dua wilayah, barat dan timur sungai. Sebelah barat sungai sering disebut dengan “pabrik” karena terdapat pabrik pengolahan latex, dan sebelah timur sungai sering disebut dengan “kebon” karena terdapat barak atau perumahan buruh dan kebun tembakau serta cacao. Bika Ambon diceritakan diperkenalkan oleh seorang buruh transmigran dari jawa yang membuat kue Bika Ambon dan memasarkannya di Medan. Pada waktu itu, jarak dari Amplas ke Medan ditempuh dalam waktu setidaknya 1 sampai 2 jam dan tempat pemasarannya adalah Kesawan, Perniagaan, Kereta Api, dan sekitarnya. Hasilnya, orang-orang Belanda sangat menyukai rasa kue tersebut. Hal ini kemudian membuat seorang pedagang keturunan Tionghoa berinisiatif untuk membantu memasarkan dan bekerja sama dalam pemasaran Bika Ambon yang dibuat oleh buruh tersebut. Akhirnya kehadiran Bika Ambon tersebut sangat laris dan membuat warga transmigran lainnya juga ikut mengadu untung di bisnis tersebut. Dan nama Bika Ambon sendiri berasal dari Bika “Amplas-Kebon” yang diakronimkan menjadi “BIKA AMBON”.';
                break;

                case 'pempek':
                    //pempek
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/pempek.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/pempek.png')";
                   document.getElementById('imgsrc').src = './asset/card/pempek.jpg';
                   document.getElementById('title').textContent = 'Pempek';
                   document.getElementById('judul').textContent = 'Pempek';
                   document.getElementById('pembuatan').textContent = 'Untuk menciptakan hidangan pempek, campurkan tepung sagu yang halus dengan ikan yang sudah dihaluskan. Tambahkan bumbu seperti bawang putih yang dihaluskan, garam, dan penyedap rasa. Bentuk adonan menjadi berbagai bentuk seperti bulat atau lonjong, kemudian goreng atau kukus hingga matang. Sajikan dengan cuko yang terbuat dari campuran gula merah, cuka, cabai, dan bawang putih yang dihaluskan untuk memberikan cita rasa asam manis yang lezat.';
                   document.getElementById('keterangan').textContent = 'Pempek adalah hidangan khas dari daerah Palembang, Sumatera Selatan, Indonesia. Makanan ini memiliki keterkaitan dengan sejarah dan budaya kerajaan Sriwijaya yang berkembang di daerah tersebut..';

                   document.getElementById('keunikan').textContent = 'Pada masa lalu, Pempek menjadi hidangan istimewa yang disajikan dalam acara-acara kerajaan dan perayaan adat di Palembang. Seiring berjalannya waktu, Pempek semakin populer di kalangan masyarakat Palembang dan menjadi hidangan sehari-hari yang terjangkau. Pempek juga menjadi warisan kuliner yang diwariskan dari generasi ke generasi. Pempek telah menjadi makanan khas Palembang yang terkenal di Indonesia dan mendapatkan pengakuan internasional. Kelezatan dan keunikan rasanya telah membuat Pempek menjadi salah satu ikon kuliner dari Sumatera Selatan. Banyak pengusaha kuliner dan pedagang Pempek di daerah tersebut yang telah membangun usaha dan menciptakan lapangan kerja, serta berkontribusi pada perekonomian lokal.  Selain itu, Pempek juga memiliki daya tarik bagi para wisatawan yang berkunjung ke Palembang. Pempek dapat ditemukan dalam berbagai variasi, seperti Pempek Kapal Selam, Pempek Lenjer, Pempek Adaan, dan masih banyak lagi. Pengalaman mencicipi Pempek yang autentik di tempat asalnya menjadi salah satu alasan mengapa makanan ini menjadi populer dan diidentifikasi sebagai makanan khas Palembang.';

                   document.getElementById('citaRasa').textContent = 'Pempek menjadi makanan khas Palembang karena keunikan dan kelezatannya. Hidangan ini memiliki tekstur kenyal dan lembut dengan rasa ikan yang khas. Pempek biasanya disajikan dengan kuah cuka yang pedas dan irisan timun segar, yang memberikan rasa asam segar yang menyegarkan.';

                   document.getElementById('sejarah').textContent = 'Sejarah Kerajaan Sriwijaya di Palembang dapat ditelusuri hingga abad ke-7 hingga abad ke-13. Pada masa kejayaannya, Kerajaan Sriwijaya menjadi pusat perdagangan maritim di wilayah Asia Tenggara dan memiliki pengaruh yang luas. Palembang, sebagai pusat kerajaan, menjadi tempat pertemuan berbagai budaya dan perdagangan yang berlimpah. Dalam sejarahnya, Palembang merupakan daerah pesisir yang kaya dengan hasil laut, terutama ikan. Pempek muncul sebagai salah satu cara untuk mengolah ikan yang melimpah menjadi hidangan yang lezat dan tahan lama. Adonan Pempek terbuat dari ikan yang dihaluskan dan dicampur dengan tepung sagu, serta bumbu-bumbu seperti garam, bawang putih, dan merica. Kemudian adonan dipanggang atau digoreng menjadi bentuk-bentuk seperti bola, telur, atau lembaran pipih.';
                break;


                case 'rawon':
                    //rawon
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/rawon.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/rawon.png')";
                   document.getElementById('imgsrc').src = './asset/card/rawon.jpg';
                   document.getElementById('title').textContent = 'Rawon';
                   document.getElementById('judul').textContent = 'Rawon';
                   document.getElementById('pembuatan').textContent = 'Untuk menyajikan hidangan rawon, rebus potongan daging sapi dengan bumbu rempah seperti lengkuas, kunyit, jahe, bawang putih, bawang merah, serta kluwek yang telah dihaluskan. Kluwek memberikan warna hitam pekat pada kuahnya yang khas. Biarkan daging merebus dalam kuah yang berasa rempah hingga empuk dan kuahnya berubah menjadi hitam pekat.';
                   document.getElementById('keterangan').textContent = 'Rawon adalah hidangan tradisional Indonesia yang berasal dari Jawa Timur. Hidangan ini terkenal karena kuahnya yang berwarna hitam pekat dan memiliki rasa yang kaya dan kompleks. Kuah hitamnya diperoleh dari penggunaan bumbu kluwek, yang juga memberikan hidangan ini ciri khas yang unik. Rawon umumnya terdiri dari potongan-potongan daging sapi yang dimasak dalam kuah kaya bumbu, dan disajikan dengan nasi putih serta pelengkap seperti telur asin, tauge, emping, dan lalapan..';

                   document.getElementById('keunikan').textContent = '1. Warna Hitam Pekat: Keunikan pertama rawon adalah warna hitam pekat pada kuahnya, yang berasal dari penggunaan bumbu kluwek. Ini memberikan daya tarik visual yang kuat dan membedakan rawon dari hidangan sup daging lainnya. 2. Bumbu Kluwek: Penggunaan biji kluwek memberikan rasa yang khas pada rawon. Bumbu ini tidak hanya memberikan warna hitam, tetapi juga kontribusi pada rasa yang kompleks dan unik. 3.  Variasi Daerah: Meskipun rawon berasal dari Jawa Timur, ada variasi dari daerah ke daerah. Setiap daerah mungkin memiliki resep dan cara memasak yang sedikit berbeda, memberikan variasi rasa dan tekstur.';

                   document.getElementById('citaRasa').textContent = 'Rasa rawon dikenal sangat kaya dan lezat. Kuahnya memiliki rasa gurih, manis, pedas, dan sedikit pahit dari kluwek. Daging sapi yang dimasak dalam kuah ini biasanya menjadi lembut dan penuh dengan cita rasa bumbu yang meresap.';

                   document.getElementById('sejarah').textContent = 'Tidak ada yang tahu pasti darimana Rawon berasal, namun kata Rawon pernah disebutkan pada prasasti taji pada tahun 901 masehi yang ditemukan didekat ponorogo, Jawa Timur. Pada prasasti ini, Rawon disebut dengan rarawwan (Sayur Rawon).';
                break;

                case 'kerakTelor':
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/kerak.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/kerak.png')";
                   document.getElementById('imgsrc').src = './asset/card/kerak.jpg';
                   document.getElementById('title').textContent = 'Kerak Telor';
                   document.getElementById('judul').textContent = 'Kerak Telor';
                   document.getElementById('pembuatan').textContent = 'Untuk membuat hidangan Kerak Telor, campurkan beras ketan yang telah direndam semalam dengan kelapa parut, garam, dan bumbu halus lainnya. Kemudian goreng telur ayam dengan campuran tersebut hingga matang dan berwarna kecokelatan di bagian luarnya. Sajikan dengan bahan tambahan seperti bawang merah goreng, cabai rawit, dan serundeng kelapa.';
                   document.getElementById('keterangan').textContent = 'Kerak telor adalah hidangan khas Betawi, Jakarta, Indonesia. Hidangan ini terkenal karena keunikan tekstur dan rasa yang dihasilkan dari kombinasi bahan-bahan utama seperti beras ketan putih, telur ayam, dan kelapa parut. Proses pembuatannya melibatkan memasak adonan beras ketan dengan telur dan bumbu-bumbu khusus pada wajan atau tungku hingga membentuk lapisan luar yang renyah dan gurih.';

                   document.getElementById('keunikan').textContent = 'Proses Pembuatan Tradisional: Salah satu keunikan Kerak Telor adalah cara pembuatannya yang melibatkan proses tradisional memasak adonan langsung di atas wajan atau tungku dan sesekali akan dibalik bersamaan dengan wajannya, dimana adonan akan secara langsung terkena api. Ini menciptakan lapisan luar yang khas, renyah, dan memiliki aroma yang khas.';

                   document.getElementById('citaRasa').textContent = 'Kerak telor memiliki rasa yang unik dan kaya. Bagian luar kerak biasanya renyah, gurih, dan agak manis karena kelapa parut yang digunakan dalam adonan. Di bagian dalamnya, terdapat tekstur yang lembut dan kenyal dari beras ketan yang dimasak bersama telur. Rasa ini kemudian ditingkatkan oleh bumbu-bumbu seperti bawang merah, bawang putih, ebi (udang kecil kering), dan garam.';

                   document.getElementById('sejarah').textContent = 'Kerak telor ditemukan oleh masyarakat Betawi secara tidak sengaja pada tahun 1970-an. Awalnya, makanan ini tercipta dari percobaan sekelompok masyarakat Betawi yang tinggal di kawasan Menteng, Jakarta Pusat. Mereka berkreasi dengan menggabungkan omelet mie dengan rempah-rempah khas Indonesia. Namun, untuk menciptakan makanan yang lebih sehat, warga Belanda di Batavia saat itu menggunakan beras ketan sebagai bahan pengganti mie. Kreasi ini ternyata diterima dengan baik oleh lidah warga Belanda dan sering dijadikan santapan pembuka yang istimewa.';
                break;


                case 'tempeMendoan':
                    //tempe mendoan
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/tempe.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/tempe.png')";
                   document.getElementById('imgsrc').src = './asset/card/mendoan.jpg';
                   document.getElementById('title').textContent = 'Tempe Mendoan';
                   document.getElementById('judul').textContent = 'Tempe Mendoan';
                   document.getElementById('pembuatan').textContent = 'Iris tempe menjadi potongan tipis, lalu celupkan ke dalam adonan tepung yang terbuat dari campuran terigu, bawang putih yang dihaluskan, garam, merica, dan air. Setelah itu, goreng hingga kecokelatan namun tetap renyah di luar dan lembut di dalam.';
                   document.getElementById('keterangan').textContent = 'Makanan ini berasal dari Banyumas, Jawa tengah. Tempe mendoan adalah makanan dimana tempe dipotong tipis tipi, dibalur tepung basah kemudian digoreng, tetapi hanya setengah matang.';

                   document.getElementById('keunikan').textContent = 'Tempe mendoan dimasak secara deepfried dengan baluran tepung tetapi tidak menghasilkan tekstur renyah dan garing, tidak seperti makanan kebanyakan.';

                   document.getElementById('citaRasa').textContent = 'Tempe mendoan memiliki rasa yang gurih asin. Berbeda dengan makanan tepung yang digoreng kebanyakan yang memiliki tekstur renyah, tempe mendoan cenderung memiliki tekstur empuk dan “benyek”. Tempe mendoan dapat dimakan menggunakan kecap dengan irisan cabe.';

                   document.getElementById('sejarah').textContent = 'Tempe mendoan muncul ketika makanan berbahan baku kedelai yang bernama "tempe" mulai tumbuh dan banyak dikonsumsi di seputar Asia Tenggara, Wilayah China danIndocina. Kedelai dibawa oleh masyarakat Asia Tengah ketika bermigrasi ke Tenggara. Pada saat itulah tempe mendoan muncul dan menjadi kudapan yang nikmat untuk disantap. Tempe mendoan ternyata sudah ada dari satu abad. Pada awal tahun 1960-an tempe mendoan mulai menjadi komoditas ekonomis dan dikelola secara komersial dalam dunia kepariwisataan. Tempe mendoan bukan sekadar kudapan nikmat untuk menemai minum teh atau secangkir kopi, namun sudah menjadi ujung tombak dari pariwisata Kabupaten Banyumas.';
                break;


                case 'ayamTaliwang':
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/taliwang.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/taliwan.png')";
                   document.getElementById('imgsrc').src = './asset/card/ayam_taliwang.jpg';
                    document.getElementById('title').textContent = 'Ayam Taliwang';
                    document.getElementById('judul').textContent = 'Ayam Taliwang';
                   document.getElementById('pembuatan').textContent = 'Lumuri potongan ayam dengan bumbu yang terdiri dari bawang merah, bawang putih, kemiri yang sudah dihaluskan, terasi, garam, serta tambahan sedikit air dan perasan jeruk nipis. Diamkan sejenak agar bumbu meresap, kemudian panggang ayam hingga matang sambil sesekali diolesi dengan bumbu yang tersisa untuk memberikan rasa yang khas.';
                    document.getElementById('keterangan').textContent = 'Ayam Taliwang adalah hidangan khas dari Lombok, Nusa Tenggara Barat, Indonesia. Hidangan ini terkenal karena menggunakan ayam kampung dan bumbu khas, terutama sambal yang pedas. Ayam Taliwang biasanya dipanggang atau dibakar, memberikan rasa yang khas pada daging ayam.';
 
                    document.getElementById('keunikan').textContent = 'Bumbu Sambal Taliwang: Sambal Taliwang adalah kunci keunikan Ayam Taliwang. Sambal ini terkenal karena kepedasannya yang tinggi dan rasa bumbu yang kaya. Sambal ini memberikan karakteristik pedas dan gurih yang membuat Ayam Taliwang berbeda dari hidangan ayam panggang lainnya. 2. Panggangan Tradisional: Ayam Taliwang sering dipanggang atau dibakar dengan menggunakan arang, memberikan cita rasa asap yang khas pada daging ayam. Proses panggangan ini juga berkontribusi pada tekstur dan aroma yang istimewa. 3. Penggunaan Ayam Kampung: Ayam yang digunakan dalam Ayam Taliwang sering kali adalah ayam kampung, yang memiliki tekstur daging yang lebih kenyal dan rasa yang lebih khas daripada ayam biasa.';
 
                    document.getElementById('citaRasa').textContent = 'Rasa Ayam Taliwang sangat khas dengan kombinasi pedas, gurih, dan sedikit manis. Ayam yang dipanggang memiliki kulit yang renyah dan daging yang lembut, yang kemudian dilumuri dengan sambal khas Taliwang yang terbuat dari cabai, bawang merah, bawang putih, garam, dan terasi. Sambal inilah yang memberikan hidangan ini cita rasa pedas yang kuat dan berbeda.';
 
                    document.getElementById('sejarah').textContent = '1. Asal usul Ayam Taliwang dapat ditelusuri ke Desa Taliwang, Lombok, Nusa Tenggara Barat. Hidangan ini diyakini berasal dari warisan kuliner lokal dan berkembang menjadi salah satu hidangan khas yang dihargai di Indonesia. Seiring waktu, Ayam Taliwang telah menjadi hidangan yang populer di berbagai daerah di Indonesia dan bahkan mendapatkan pengakuan di kancah internasional. Tradisionalnya, Ayam Taliwang sering dihidangkan pada acara-acara khusus seperti perayaan dan upacara adat. Namun, popularitasnya yang terus meningkat telah membuatnya menjadi pilihan umum di restoran dan warung makan di seluruh Indonesia. Ayam Taliwang tidak hanya dihargai karena cita rasanya yang unik, tetapi juga karena mencerminkan kekayaan dan keberagaman kuliner Indonesia. 2. Nama taliwang ini berasal dari nama sebuah kerajaan yang terdapat di Pulau Sumbawa. Kehadiran masakan ini berawal dari sebuah perang yang terjadi sekitar tahun 1630 Masehi di antara dua kerajaan yaitu kerajaan Selaparang sebuah kerajaan Islam yang berada di Lombok dan kerajaan Karangasem yang berada di Bali. Pada saat itu pasukan dari Kerajaan Taliwang diutus datang ke Lombok untuk membantu Kerajaan Selaparang. Dari sinilah suku Sasak bisa mencicipi enaknya olahan juru masak Kerajaan Taliwang yaitu olahan daging ayam pelalah dengan cita rasa pedas, sehingga ini menjadi cikal bakal ayam taliwang tersebut dan kemudian mereka saling berbagi ilmu mengenai cara pengolahannya.';
                break;


                case 'seiSapi':
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/sei.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/sei.png')";
                   document.getElementById('imgsrc').src = './asset/card/sei.webp';
                    document.getElementById('title').textContent = 'Sei Sapi';
                        document.getElementById('judul').textContent = 'Sei Sapi';
                   document.getElementById('pembuatan').textContent = 'Untuk mempersiapkan Sei Sapi, perlu merendam dan mengeringkan daging sapi yang telah dipotong tipis-tipis. Setelah itu, rendam dalam campuran bumbu yang terdiri dari garam, gula, merica, bawang putih, dan bumbu rempah lainnya, biarkan meresap semalaman. Proses selanjutnya adalah menggoreng daging tersebut hingga kering dan berwarna kecokelatan, menjadikan Sei Sapi ini kaya akan rasa rempah yang meresap dalam setiap gigitannya.';
                    document.getElementById('keterangan').textContent = 'Se’i adalah daging asap khas Indonesia yang berasal dari pulau Timor, Nusa Tenggara Timur. Kata “se’i” berasal dari bahasa lokal yang berarti “daging yang diiris tipis”. Hidangan ini biasa disajikan dan dikonsumsi oleh penduduk Nusa Tenggara Timur, khususnya orang Timor. Di kepulauan NTT yang memiliki iklim dan cuaca kering, metode pengasapan tradisional dilakukan untuk mengawetkan daging dan meningkatkan nilai nutrisi dan ekonomi dari daging. Saat ini, sudah banyak dijumpai daging se’i yang dibuat dari daging sapi dan daging ayam disamping mayoritas masyarakat Indonesia yang muslim.';
     
                    document.getElementById('keunikan').textContent = 'Keunikan se’i adalah cara membuatannya yaitu dengan metode pengasapan.';
     
                    document.getElementById('citaRasa').textContent = 'Ciri khas dari se’i adalah daging yang diiris tipis, yang dibumbui garam dan rempah pilihan lalu diasap. Secara tekstur se’i mirip dengan bacon khas Amerika namun lebih tebal. Di Kupang, orang menikmati se’i dengan nasi panas didampingi dengan sambal lu’at dan jagung bose.';
     
                    document.getElementById('sejarah').textContent = 'Teknik Sei atau teknik pengolahan daging secara tradisional dengan cara diasapi menggunakan kayu Kosambi pilihan tersebut berasal dari suku Mollo yang tinggal di daerah pegunungan Mutis, yang mana lokasi tersebut berjarak 130 kilometer dari kota Kupang. Awalnya, Sei khas provinsi NTT menggunakan daging babi hutan untuk bahan utama karena teksturnya padat dan tidak terlalu berlemak atau daging rusa Timor (Cervus timorensis), namun kegiatan ini menyebabkan menurunnya populasi rusa dan menjadi hewan yang dilindungi. Kemudian seiring berjalannya waktu, para pendatang di NTT kemudian mulai mengganti daging babi dengan daging sapi agar halal dan bisa dinikmati oleh semua kalangan. Saat ini bahkan ada yang sudah menggunakan daging ayam maupun ikan.';
                break;

                case 'sayurDaunUbi':
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/sayur.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/sayur.png')";
                   document.getElementById('imgsrc').src = './asset/card/sayur.jpg';
                    document.getElementById('title').textContent = 'Sayur Daun Ubi Bunga Pepaya';
                            document.getElementById('judul').textContent = 'Sayur Pepaya';
                   document.getElementById('pembuatan').textContent = 'Masak sayur ini dengan cara merebus daun ubi dan bunga pepaya dengan bumbu rempah seperti serai, daun salam, lengkuas, garam, serta santan kelapa. Tambahkan sedikit air agar sayuran terendam dan biarkan mendidih hingga bumbu meresap sempurna ke dalam sayuran.';
                    document.getElementById('keterangan').textContent = ' Sayur tumis daun ubi bunga pepaya adalah salah satu hidangan khas dari daerah Nusa Tenggara Timur (NTT) yang sangat lezat dan mudah untuk dibuat. sayur ini dibuat dengan cara menumis daun ubi dan bunga dari pohon pepaya.';
         
                    document.getElementById('keunikan').textContent = 'Sayur ini menggunakan daun ubi dan bunga pepaya sebagai bahan pokok pembuatannnya. Kedua daun ini biasanya dijadikan sebagai lalapan. Ini membuktikan kreatifitas masyarakat NTT dalam memanfaatkan hasil alam disekitarnya.';
         
                    document.getElementById('citaRasa').textContent = 'Sayur daun ubi bunga pepaya memiliki rasa yang unik, teksturnya sedikit berair. Dan sebaiknya hati hati dalam membuatnya, cara pembuatan yang salah dapat menyebabkan sayur menjadi pahit.';
         
                    document.getElementById('sejarah').textContent = 'Tidak ada catatan resmi mengenai sejarah dari sayur ini, tetapi keberadaan makanan ini merupakan hasil dari pengaruh Minahasa. Makanan ini menunjukkan adaptasi dan kreativitas masyarakat NTT dalam memanfaatkan bahan alami yang tersedia di sekitarnya sebagai alternatif ataupun sebagai tambahan dari resep sebelumnya.';
                break;

                case 'hekeng':
                    //hekeng
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/hekeng.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/hekeng.png')";
                   document.getElementById('imgsrc').src = './asset/card/hekeng.jpg';
                    document.getElementById('title').textContent = 'Hekeng';
                                document.getElementById('judul').textContent = 'Hekeng';
                   document.getElementById('pembuatan').textContent = 'Hidangan tradisional ini biasanya terbuat dari ikan laut yang diolah dengan cara direbus atau dikukus, kemudian dicampur dengan bumbu yang terdiri dari kemangi, tomat, bawang merah, bawang putih, serta perasan jeruk nipis. Proses pencampuran bumbu yang meresap dalam ikan memberikan rasa segar dan asam yang khas.';
                    document.getElementById('keterangan').textContent = 'Hekeng enrupakan makanan khas Pontianak. Hekeng merupakan makanan yang terbuat dari lemak babi, udang dan tepung yang dibungkus menggunakan kulit roti. Tetapi terdapat varian lain dimana lemak babi diubah menjadi daging ayam. Hekeng dimasak dengan cara dikukus lalu digoreng, tetapi hekeng dapat langsung dimakan setelah di kukus.';
             
                    document.getElementById('keunikan').textContent = 'Hekeng dibalut dengan kulit tahu. Penggunaan kulit tahu sebagai pembungkus terbilang cukup jarang, pengguaan adonan telur dan tepung yang dimasak tipis tipis (seperti kulit risol) lebih sering digunakan.';
             
                    document.getElementById('citaRasa').textContent = 'Hekeng memiliki rasa gurih dan asin serta sedikit berair (apabila hanya dikukus) dan dapat menjadi garing apabla digoreng terlebih dahulu. Hekeng dapat dikonsumsi dengan cocolan.';
             
                    document.getElementById('sejarah').textContent = ' Tidak ada Sejarah yang mencatat tentang kemunculan hekeng di Indonesia, tetapi ada cerita yang mengatakan bahwa hekeng dibawa oleh orang orang tiongkok saat sedang berada di Nusantara. Hekeng juga dikenal dengan nama Ngohiong di daerah Bogor, Jawa Barat, atau Lap Cheong di Tiongkok. Nama Hekeng sendiri berasal dari bahasa Hokkien yang berarti “lima bumbu”, yaitu bawang putih, jahe, merica, cengkeh, dan kayu manis';
                break;

                case 'ganganManok':
                    //gangan manok
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/gangan.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/gangan.png')";
                   document.getElementById('imgsrc').src = './asset/card/gangan.jpg';
                    document.getElementById('title').textContent = 'Gangan Manok';
                                document.getElementById('judul').textContent = 'Gangan Manok';
                   document.getElementById('pembuatan').textContent = 'Gangan Manok adalah masakan khas Papua yang terbuat dari ayam yang dimasak dalam kuah kental yang berasa rempah. Bumbu yang digunakan termasuk jahe, lengkuas, daun jeruk, serta serai yang dimasukkan ke dalam kaldu ayam yang telah direbus hingga mendidih dan bumbunya meresap sempurna dalam daging ayam.';
                    document.getElementById('keterangan').textContent = 'Gangan manok yaitu sayur bening sejenis dengan makanan bakso dengan pelengkap bola-bola ayam. Sayurnya kaldunya dilengkapi dengan sayuran bayam dan buah oyong yang kaya serat.';
             
                    document.getElementById('keunikan').textContent = 'Perbedaan Gangan Manok dengan bakso pada umumnya yaitu bola-bola gangan manok diolah dari daging ayam. Bola bola daging itu diadon dengan tepung meizena, putih telur, dan bumbu-bumbu. Kaldu yang digunakan kaldu ayam. Bola-bola ayam yang sudah jadi kemudian dimasukkan ke dalam masakan kaldu bersama bahan-bahan.';
             
                    document.getElementById('citaRasa').textContent = 'Gangan manok terkenal sangat gurih. Bola dagingnya bertekstur lembut dibanding dengan bakso daging sapi. Ditambah dengan sayur bayam dan oyong, gangan manok sangat segar dinikmati. Kamu juga bisa menambahkan sambal atau saus sesuai selera seperti pada bakso.';
             
                    document.getElementById('sejarah').textContent = 'Gangan dalam bahasa daerah setempat berarti ‘sayur’ dan ‘manok’ berarti ayam. Di Kalimantan, banyak olahan tradisional gangan ini.Gangan manok tepatnya berasal dari Balikpapan sehingga sering juga disebut gangan manok Balikpapan. Gangan dalam bahasa daerah setempat berarti sayur dan manok berarti ayam. Di Kalimantan, banyak olahan tradisional gangan ini.';
                break;

                case 'pansoh':
                    //pansoh
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/pansoh.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/pansoh.png')";
                   document.getElementById('imgsrc').src = './asset/card/pansoh.jpg';
                    document.getElementById('title').textContent = 'Pansoh';
                                document.getElementById('judul').textContent = 'Pansoh';
                   document.getElementById('pembuatan').textContent = 'Makanan khas suku Dayak ini melibatkan proses memasak daging (biasanya ikan atau ayam) yang dibungkus dalam daun pisang bersama dengan rempah-rempah seperti lengkuas, serai, daun kemangi, serta sedikit garam. Paket daun yang berisi bahan-bahan ini kemudian dimasak dalam bambu yang dipanaskan di atas api hingga bumbu meresap dan aroma harumnya menyebar.';
                    document.getElementById('keterangan').textContent = 'Pansoh adalah hidangan tradisional yang berasal dari Kalimantan Barat, khususnya dari suku Dayak. Hidangan ini memiliki keterkaitan dengan sejarah dan budaya suku Dayak yang mendiami daerah tersebut. Kalimantan Barat memiliki sejarah yang kaya dengan adanya kerajaan-kerajaan Dayak yang berkuasa di wilayah ini. Salah satu kerajaan terkenal adalah Kerajaan Mempawah yang berdiri pada abad ke-13. Kerajaan ini memiliki pengaruh yang signifikan dalam perkembangan budaya dan adat istiadat suku Dayak di Kalimantan Barat. ';
             
                    document.getElementById('keunikan').textContent = 'Pansoh menjadi makanan khas karena keunikan cara pembuatannya dan peranannya dalam budaya suku Dayak. Hidangan ini sering disajikan dalam berbagai upacara adat, ritual, dan perayaan suku Dayak. Pansoh menggambarkan hubungan harmonis antara manusia, alam, dan roh nenek moyang dalam kepercayaan suku Dayak. Bambu sebagai wadah memasak melambangkan penghormatan terhadap alam dan menjaga kebersihan lingkungan.';
             
                    document.getElementById('citaRasa').textContent = 'Pansoh terbuat dari daging ayam, ikan, atau babi yang dimasak dengan menggunakan bumbu-bumbu tradisional seperti serai, daun salam, dan rempah-rempah lainnya. Hidangan ini dimasak dalam bambu yang ditempatkan di atas api unggun. Proses memasak dalam bambu memberikan aroma dan cita rasa khas pada makanan.';
             
                    document.getElementById('sejarah').textContent = 'Pengaruh makanan Pansoh terhadap masyarakat sekitar terlihat dalam berbagai aspek kehidupan. Pertama, hidangan ini menjadi bagian integral dari upacara adat suku Dayak. Pansoh sering disajikan dalam acara-acara seperti pernikahan, upacara panen, dan ritual keagamaan. Makanan ini mencerminkan nilai-nilai kebersamaan, keramahan, dan kehidupan spiritual dalam komunitas suku Dayak. Kedua, Pansoh menjadi cara untuk memanfaatkan bahan-bahan alami yang melimpah di sekitar daerah Kalimantan Barat. Daging ayam, ikan, atau babi yang digunakan dalam Pansoh biasanya berasal dari hasil tangkapan atau ternak lokal. Penggunaan bambu sebagai wadah memasak juga memanfaatkan sumber daya alam yang tersedia di sekitar masyarakat. Ketiga, Pansoh menjadi simbol identitas budaya suku Dayak dan daerah Kalimantan Barat. Makanan ini menjadi lambang kekayaan kuliner tradisional dan menjadi daya tarik bagi wisatawan yang ingin mencicipi kuliner lokal. Pansoh juga menjadi sarana untuk melestarikan keahlian tradisional dalam pembuatan dan penyajian makanan.';
                break;

                case 'conro':
                    //HEKNEN
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/conro.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/conro.png')";
                   document.getElementById('imgsrc').src = './asset/card/konro.webp';
                    document.getElementById('title').textContent = 'Conro';
                                document.getElementById('judul').textContent = 'Conro';
                   document.getElementById('pembuatan').textContent = 'Hidangan Manado ini merupakan semacam sup khas yang terdiri dari berbagai macam sayuran seperti daun singkong, kacang panjang, jagung muda, dan daging yang dimasak dalam kuah santan kental yang kaya akan rempah-rempah seperti kunyit, bawang merah, bawang putih, dan cabai.';
                    document.getElementById('keterangan').textContent = 'Conro atau pallu conro adalah salah satu makanan khas Sulawesi Selatan yang berasal dari tradisi Etnik Makassar. Masakan ini berupa sup iga sapi atau daging sapi berkuah warna coklat kehitaman yang biasa dimakan dengan burasa dan ketupat yang dipotong-potong terlebih dahulu.';
             
                    document.getElementById('keunikan').textContent = 'Salah satu keunikan conro adalah cara memasaknya yang menggunakan kayu bakar. Hal ini membuat aroma conro semakin harum dan menggugah selera. Selain itu, conro juga biasanya disajikan dalam wadah tanah liat yang disebut dengan "tanah ware".';
             
                    document.getElementById('citaRasa').textContent = 'Rasa conro yang khas adalah perpaduan antara gurih, pedas, dan asam. Kuahnya yang kental dan berbumbu rempah-rempah menjadikannya sangat lezat dan menggugah selera. Daging iga sapi atau daging sapinya pun sangat empuk dan lembut.';
             
                    document.getElementById('sejarah').textContent = 'Conro adalah hidangan khas dari daerah Sulawesi Selatan yaitu Etnik Makassar,, yang memiliki sejarah yang kaya dan menarik.Pada awalnya, Sup Conro menggunakan bahan dasar tulang kerbau, karena hal itu membuat populasi kerbau semakin langka di Sulawesi. Hingga pada akhirnya, pada tahun 1960-an bahan Konro diganti menjadi daging sapi hingga sampai sekarang. Dari dulu hingga sekarang, Konro memiliki tiga tahapan evolusi. Awalnya masakan ini berbentuk sop tulang kerbau atau disebut Pallu Buku. Daging kerbau dalam masakan Conro memiliki nilai filosofis, kerbau merupakan simbol etos kerja, tanda gerak pertanian, mencerminkan kemakmuran budaya agraris dan mentalitas yang kuat terhadap alam. Kemudian berubah menjadi Konro yaitu sop tulang iga berbalut daging dan tahap akhir berkembang menjadi Konro bakar berbentuk stik iga sapi.';
                break;

                case 'Kaledo':
                    //Kaledo
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/kaledo.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/kaledo.png')";
                   document.getElementById('imgsrc').src = './asset/card/kaledo.webp';
                    document.getElementById('title').textContent = 'Kaledo';
                                document.getElementById('judul').textContent = 'Kaledo';
                   document.getElementById('pembuatan').textContent = 'Makanan khas Makassar ini adalah sup daging sapi yang dimasak hingga empuk dengan tambahan berbagai rempah seperti kayu manis, kapulaga, cengkeh, dan biji pala. Kuahnya yang kaya rasa dan daging sapi yang lembut menjadikan hidangan ini begitu lezat.';
                    document.getElementById('keterangan').textContent = 'Kaledo adalah makanan khas Sulawesi Tengah yang berasal dari daerah Donggala. Masakan ini berupa sup tulang kaki sapi berkuah bening yang biasa dimakan dengan ubi jalar rebus.';
             
                    document.getElementById('keunikan').textContent = 'Salah satu keunikan kaledo adalah cara memasaknya yang menggunakan kayu bakar. Hal ini membuat aroma kaledo semakin harum dan menggugah selera. Selain itu, kaledo juga biasanya disajikan dalam wadah tanah liat yang disebut dengan "tanah ware".';
             
                    document.getElementById('citaRasa').textContent = 'Rasa kaledo yang khas adalah perpaduan antara gurih, asam, dan pedas. Kuahnya yang bening dan segar menjadikannya sangat lezat dan menggugah selera. Daging kaki sapinya pun sangat empuk dan juicy.';
             
                    document.getElementById('sejarah').textContent = 'Kaledo, hidangan khas dari Sulawesi Tengah, muncul pada abad ke-16 sebelum Islam masuk ke daerah tersebut. Palu, dengan lanskapnya yang penuh lembah dan padang rumput, mendorong masyarakatnya untuk beternak, terutama sapi, kambing, dan domba. Inilah yang mendorong kelahiran kuliner Kaledo di kalangan suku Kaili, menggambarkan perjalanan etnis Kaili di lembah Palu. Awalnya, hidangan ini hanya disajikan untuk bangsawan, raja, atau tamu istimewa dari luar kota. Sementara itu, pengolahan Kaledo telah berubah dari masa lalu. Dahulu, juru masak memasak satu potong ekor sapi, sementara sekarang menggunakan tulang kaki sapi yang dipotong-potong dan sedikit daging sapi. Proses memasaknya dahulu memakan waktu 8 jam di tungku besar dengan kayu bakar, namun sekarang hanya 2 jam dengan alat modern seperti presto dan kompor gas. Tujuannya tetap sama: membuat daging sapi empuk untuk dinikmati. Kini, Kaledo tidak lagi menjadi eksklusif untuk bangsawan, tetapi menjadi hidangan favorit seluruh masyarakat Palu, sering dihidangkan dalam acara khusus seperti pernikahan dan Idul Adha.';
                break;

                case 'binteBiluhuta':
                    //HEKNEN
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/binte.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/binte.png')";
                   document.getElementById('imgsrc').src = './asset/card/binte.jpg';
                    document.getElementById('title').textContent = 'Binte Biluhuta';
                                document.getElementById('judul').textContent = 'Binte Biluhuta';
                   document.getElementById('pembuatan').textContent = 'Hidangan khas Bolaang Mongondow ini terbuat dari ikan yang diasinkan dan kemudian diolah menjadi semacam semur dengan tambahan bumbu seperti jahe, bawang putih, bawang merah, cabai, serta serai, yang memberikan cita rasa asam manis yang unik.';
                    document.getElementById('keterangan').textContent = 'Binte biluhuta adalah makanan khas Gorontalo yang berasal dari bahasa Gorontalo. "Binte" artinya jagung dan "biluhuta" artinya disiram. Jadi diartikan secara bahasa adalah jagung yang disiram. Binte biluhuta merupakan varian sup jagung yang terdiri dari jagung, ikan cakalang, udang, dan parutan kelapa yang diracik dengan aneka bumbu masakan khas. Binte biluhuta merupakan menu masakan kegemaran masyarakat Gorontalo yang memiliki perpaduan 3 (tiga) rasa, yaitu rasa manis, asin, dan pedas.';
             
                    document.getElementById('keunikan').textContent = 'Salah satu keunikan binte biluhuta adalah cara penyajiannya. Binte biluhuta biasanya disajikan dalam mangkuk besar dan di atasnya diletakkan potongan ikan cakalang, udang, dan kemangi. Kemangi yang ditambahkan pada binte biluhuta menambah aroma yang sedap. Selain itu, binte biluhuta juga biasanya disajikan dengan sambal colo-colo yang pedas.';
             
                    document.getElementById('citaRasa').textContent = 'Rasa binte biluhuta yang khas adalah perpaduan antara manis, asin, dan pedas. Kuahnya yang kental dan berbumbu rempah-rempah menjadikannya sangat lezat dan menggugah selera. Jagung yang digunakan dalam binte biluhuta biasanya adalah jagung muda yang dipipil. Jagung muda memiliki rasa yang lebih manis dan lembut.';
             
                    document.getElementById('sejarah').textContent = 'Makanan yang juga dikenal dengan Milu Siram dalam bahasa Melayu tersebut merupakan kreasi makanan yang memanfaatkan jagung sebagai komoditas utama Gorontalo. Makanan ini diperkirakan telah ada sejak abad ke-13 pada masa pemerintahan Raja Matolodula Daa atau Ilahudu. Selain itu, makanan Binte Biluhuta dulunya juga disebut sebagai makanan yang digunakan sebagai bahan diplomasi untuk mendamaikan dua kerajaan yang sedang berperang, yakni Kerajaan Gorontalo dan Kerajaan Limboto.';
                break;

                case 'airGuraka':
                    //Air guraka
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/guraka.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/guraka.png')";
                   document.getElementById('imgsrc').src = './asset/card/gulaka.jpg';
                    document.getElementById('title').textContent = 'Air Guraka';
                                document.getElementById('judul').textContent = 'Air Guraka';
                   document.getElementById('pembuatan').textContent = 'Minuman tradisional dari Papua ini terbuat dari campuran parutan kelapa muda, air, dan gula aren yang memberikan rasa manis segar.';
                    document.getElementById('keterangan').textContent = '"Air Guraka" yang diambil dari bahasa Ternate, yaitu "guraka" yang berarti jahe. Air Guraka adalah minuman tradisional khas Maluku Utara yang terbuat dari jahe, gula aren, kayu manis, dan kacang kenari. Minuman ini biasanya disajikan hangat dan memiliki rasa yang hangat dan manis.';
             
                    document.getElementById('keunikan').textContent = 'Keunikan dari Air Guraka adalah rasanya yang hangat dan manis. Minuman ini cocok diminum saat cuaca dingin atau saat sedang sakit. Selain itu, Air Guraka juga memiliki khasiat untuk menghangatkan tubuh dan menambah stamina.';
             
                    document.getElementById('citaRasa').textContent = 'Air Guraka memiliki rasa yang hangat dan manis. Rasa hangat berasal dari jahe, sedangkan rasa manis berasal dari gula aren. Kacang kenari menambah tekstur dan rasa gurih pada minuman ini.';
             
                    document.getElementById('sejarah').textContent = 'Pada zamannya, Maluku adalah pusat penghasil rempah-rempah di Indonesia. Tak heran jika kuliner di daerah tersebut terkenal akan campuran rempah-rempahnya. Jika Anda berjalan-jalan ke Ternate atau Halmahera, maka di sepanjang jalan perkotaan Anda bisa menemukan penjual air guraka dengan mudah. Air guraka sendiri dikenal masyarakat Ternate sebagai warisan kuliner leluhur. Dulunya air guraka merupakan minuman favorit bangsawan di Ternate. Kini air guraka banyak dinikmati masyarakat sebagai minuman penambah stamina.';
                break;

                case 'papeda':
                    //papeda
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/papeda.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/papeda.png')";
                   document.getElementById('imgsrc').src = './asset/card/papeda.webp';
                    document.getElementById('title').textContent = 'Papeda';
                                document.getElementById('judul').textContent = 'Papeda';
                   document.getElementById('pembuatan').textContent = 'Untuk membuat hidangan papeda, campurkan tepung sagu dengan air dingin dan aduk hingga kental. Kemudian masak adonan tersebut hingga menjadi bubur kental yang siap disajikan bersama lauk ikan atau daging serta sambal sebagai pelengkapnya.';
                    document.getElementById('keterangan').textContent = 'Papeda adalah makanan khas Papua yang terbuat dari tepung sagu. "papeda" yang diambil dari bahasa Papua, yaitu "pa" yang berarti "makanan" dan "eda" yang berarti "sagu". Papeda memiliki tekstur yang kenyal dan lengket, serta berwarna putih. Papeda biasanya disajikan dengan ikan kuah kuning atau ikan kuah asam.';
             
                    document.getElementById('keunikan').textContent = 'Keunikan dari papeda adalah teksturnya yang kenyal dan lengket. Papeda sering disebut sebagai "makanan sagu" karena terbuat dari tepung sagu. Papeda juga merupakan makanan pokok masyarakat Papua.';
             
                    document.getElementById('citaRasa').textContent = 'Papeda memiliki rasa yang tawar, sehingga biasanya disajikan dengan ikan kuah kuning atau ikan kuah asam. Ikan kuah kuning memiliki rasa yang gurih dan asam, sedangkan ikan kuah asam memiliki rasa yang asam dan pedas.';
             
                    document.getElementById('sejarah').textContent = 'Papeda terkenal luas dalam masyarakat adat Sentani dan Abrab di Danau Sentani dan Arso, juga Manokwari. Makanan ini sering dihidangkan saat acara-acara penting di wilayah Papua, Maluku, dan sekitarnya. Hidangan khas Papua ini sering dihadirkan dalam berbagai upacara adat, salah satunya adalah Watani Kame. Upacara ini merupakan tanda berakhirnya siklus kematian seseorang. Makanan ini akan dibagikan kepada orang-orang yang sangat membantu upacara tersebut.Selain kematian, papeda juga dijadikan sajian penting dalam upacara kelahiran anak pertama di Inanwatan, Sorong Selatan, Papua Barat. Papeda juga menjadi makanan penting dalam siklus kehidupan Suku Nuaulu di Pulau Seram, Maluku. Papeda, yang di sana sebagai sonar monne, makanan ini jadi hidangan dalam ritual perayaan masa pubertas seorang gadis. Tapi, Suku Nuaulu dan Suku Huaulu melarang wanita yang sedang dalam masa haid untuk memasak papeda karena dianggap tabu.';
                break;

                case 'nasiLapola':
                    //nasi lapola
var elements = document.getElementsByClassName("rendangpad");
var element = elements[0];
element.style.backgroundImage = "url('./asset/padding/lapola.png')";
var elements1 = document.getElementsByClassName("contact_section");
var element1 = elements1[0];
element1.style.backgroundImage = "url('./asset/half/lapola.png')";
                   document.getElementById('imgsrc').src = './asset/card/lapola.webp';
                    document.getElementById('title').textContent = 'Nasi Lapola';
                     document.getElementById('judul').textContent = 'Nasi Lapola';
                   document.getElementById('pembuatan').textContent = 'Nasi Lapola adalah hidangan khas Maluku yang terdiri dari nasi kuning yang disajikan bersama berbagai lauk pauk seperti ikan bakar, sate ikan, sayur, dan sambal. Proses memasak nasi kuning bisa berbeda-beda tergantung pada variasi resep daerah.';
                    document.getElementById('keterangan').textContent = 'Nasi Lapola, makanan pokok khas Maluku, terdiri dari beras, kacang tolo, dan kelapa muda parut. Sajian ini disertai Kohu Kohu, yang terbuat dari ikan tongkol atau teri basah dicampur dengan lalapan mentah serta parutan kelapa yang dibumbui dengan cabai merah, bawang merah, bawang putih, dan perasan jeruk nipis. Untuk melengkapi hidangan, disajikan pula sambal Colo Colo yang terdiri dari tomat, cabai rawit, bawang merah, dan kecap.';
             
                    document.getElementById('keunikan').textContent = 'Nasi Lapola memiliki keunikan tersendiri dari Maluku karena merupakan campuran beras, kacang tolo, dan kelapa muda parut. Keunikan ini menciptakan tekstur dan rasa yang unik dengan sentuhan gurih dan sedikit manis dari kelapa yang membedakannya dari nasi-nasi tradisional lainnya.';
             
                    document.getElementById('citaRasa').textContent = 'Nasi yang memiliki cita rasa gurih ini sangatlah nikmat jika dinikmati dengan ikan panggang serta sambal. nasi ini terasa begitu sedap dengan aroma harum pandan dan kelezatan kelapa yang khas. Kombinasi itu semakin sempurna dengan tambahan kacang merah. Sungguh padu!';
             
                    document.getElementById('sejarah').textContent = 'Nasi Lapola merupakan olahan kuliner tradisional khas Maluku Utara. Nasi ini adalah kuliner tersohor di daratan Maluku Utara. Sejarah nasi Lapola mencerminkan pergeseran pola konsumsi masyarakat Maluku dari sagu sebagai makanan pokok tradisional ke variasi kuliner baru seperti nasi Lapola. Meskipun sagu sebelumnya menjadi makanan utama, nasi Lapola menjadi bukti evolusi kuliner di Maluku. Terbuat dari beras, kacang tolo, dan parutan kelapa muda, nasi Lapola menjadi pilihan utama dalam masyarakat Maluku.';
                break;

                   
               default:
                   // Tidak ada aksi, menggunakan konten awal
                   break;
           }
       });

    
