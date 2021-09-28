```
/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// Global variables adalah variabel yang dideklarasikan di luar blok.
// Local variables adalah variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped.

<script type="text/javascript">
	var varGlobal =  " Saya Mengakses varGlobal, maka saya global";
	function local(){
		document.getElementById("demo").innerHTML = varGlobal
	}
	local()
</script>

var varGlobal =  " Saya Mengakses varGlobal, maka saya global";
	function local(){
	varScope = "Saya Mengakses varScope, maka Saya Local";
	document.getElementById("demo").innerHTML = varScope;
	}
	local()

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

// Mariah
// Karena dia tidak menampilkan value dari variable name
```
