// Fungsi untuk menyimpan data input ke dalam session storage
function saveData() {
	// Ambil data input dari form
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let hobby = document.getElementsByName("hobby[]");
	let selectedHobby = [];
	for (let i = 0; i < hobby.length; i++) {
		if (hobby[i].checked) {
			selectedHobby.push(hobby[i].value);
		}
	}
	let gender = document.querySelector('input[name="gender"]:checked').value;
	let country = document.getElementById("country").value;
	let message = document.getElementById("message").value;

	// Simpan data input ke dalam array
	let inputData = {
		name: name,
		email: email,
		hobby: selectedHobby,
		gender: gender,
		country: country,
		message: message
	};

	// Ambil data array yang sudah ada dari session storage
	let existingData = JSON.parse(sessionStorage.getItem("inputData")) || [];

	// Tambahkan data input ke dalam array yang sudah ada
existingData.push(inputData);

// Simpan data array yang sudah diperbarui ke dalam session storage
sessionStorage.setItem("inputData", JSON.stringify(existingData));

// Tampilkan data input di halaman
showData();
}

// Fungsi untuk menampilkan data input dari session storage
function showData() {
// Ambil data array dari session storage
let existingData = JSON.parse(sessionStorage.getItem("inputData")) || [];

// Kosongkan list data input
let list = document.getElementById("dataInput");
list.innerHTML = "";

// Tambahkan setiap data input ke dalam list
for (let i = 0; i < existingData.length; i++) {
let item = existingData[i];
let listItem = document.createElement("li");
listItem.innerHTML = "<strong>" + item.name + "</strong><br>" +
				 "Email: " + item.email + "<br>" +
				 "Hobi: " + item.hobby.join(", ") + "<br>" +
				 "Jenis Kelamin: " + item.gender + "<br>" +
				 "Negara: " + item.country + "<br>" +
				 "Pesan: " + item.message;
list.appendChild(listItem);
}
}

// Panggil fungsi showData() saat halaman pertama kali dimuat
showData();

// Tambahkan event listener pada form untuk menangani submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
event.preventDefault(); // Mencegah form dikirim ke server
saveData(); // Panggil fungsi saveData() untuk menyimpan data input
myForm.reset(); // Reset form
});