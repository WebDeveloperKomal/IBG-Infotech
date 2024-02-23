// ----------------------------get all data----------------------------------------------

var jwtToken = localStorage.getItem('jwtToken');

document.addEventListener('DOMContentLoaded', getData);



document.addEventListener('DOMContentLoaded', function () {
    blog1();
});


function blog1() {
    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const blogData = data.data;

            // Assuming blogData[0] is the first record, blogData[1] is the second record, and blogData[2] is the third record
            const firstRecord = blogData[0];
            const secondRecord = blogData[1];
            const thirdRecord = blogData[2];

            // Set image source, title, and content for the first record
            document.getElementById('firstRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image1}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image2}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image3}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image4}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${firstRecord.image5}" width="253" height="253" alt="${firstRecord.name}" title="${firstRecord.name}" />`;
            document.getElementById('firstRecordName').innerText = firstRecord.name;
            document.getElementById('firstRecordText1').innerText = firstRecord.text.substring(54, 123);
            document.getElementById('firstRecordText2').innerText = firstRecord.text.substring(139, 486);
            document.getElementById('firstRecordText3').innerText = firstRecord.text.substring(497, 719);
            document.getElementById('firstRecordText4').innerText = firstRecord.text.substring(730, 765);
            document.getElementById('firstRecordText5').innerText = firstRecord.text.substring(783, 1069);
            document.getElementById('firstRecordText6').innerText = firstRecord.text.substring(1088, 1209);
            document.getElementById('firstRecordText7').innerHTML = firstRecord.text.substring(1226, 1675);
            document.getElementById('firstRecordText8').innerText = firstRecord.text.substring(1687, 1723);
            document.getElementById('firstRecordText9').innerText = firstRecord.text.substring(1734, 1990);
            document.getElementById('firstRecordText10').innerText = firstRecord.text.substring(2009, 2122);

            document.getElementById('firstRecordText11').innerHTML = firstRecord.text.substring(2131, 2630);
            document.getElementById('firstRecordText12').innerText = firstRecord.text.substring(2634, 2671);
            document.getElementById('firstRecordText13').innerText = firstRecord.text.substring(2682, 2963);
            document.getElementById('firstRecordText14').innerText = firstRecord.text.substring(2982, 3094);

            document.getElementById('firstRecordText15').innerHTML = firstRecord.text.substring(3094, 3809);
            document.getElementById('firstRecordText16').innerText = firstRecord.text.substring(3834, 3874);
            document.getElementById('firstRecordText17').innerText = firstRecord.text.substring(3885, 4601);
            document.getElementById('firstRecordText18').innerText = firstRecord.text.substring(4612, 4811);

            // Set image source, title, and content for the second record
            document.getElementById('secondRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image1}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image2}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image3}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image4}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${secondRecord.image5}" width="253" height="253" alt="${secondRecord.name}" title="${secondRecord.name}" />`;
            document.getElementById('secondRecordName').innerText = secondRecord.name;
            document.getElementById('secondRecordText').innerText = secondRecord.text;

            // Set image source, title, and content for the third record
            document.getElementById('thirdRecordImage1').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image1}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage2').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image2}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage3').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image3}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage4').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image4}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordImage5').innerHTML = `<img decoding="async" class="no-lazyload" src="data:image/jpeg;base64,${thirdRecord.image5}" width="253" height="253" alt="${thirdRecord.name}" title="${thirdRecord.name}" />`;
            document.getElementById('thirdRecordName').innerText = thirdRecord.name;
            document.getElementById('thirdRecordText').innerText = thirdRecord.text;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call blog1() when the page loads
window.onload = function () {
    blog1();
};







function getData() {
    var jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8181/ibg-infotech/auth/get-all-blog', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(data => {
            console.log(data);
            populateTable(data.data);
        })

        .catch(error => {
            console.log('Error fetching data:', error);
        });
}


function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}


function populateTable(data) {
    const tableBody = document.getElementById('dataTableBody');
    tableBody.innerHTML = '';

    if (Array.isArray(data)) {
        data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="data:image/jpeg;base64,${item.image1}" width="100" height="100"></td>
            <td><img src="data:image/jpeg;base64,${item.image2}" width="100" height="100"></td>
            <td><img src="data:image/jpeg;base64,${item.image3}" width="100" height="100"></td>
            <td><img src="data:image/jpeg;base64,${item.image4}" width="100" height="100"></td>
            <td><img src="data:image/jpeg;base64,${item.image5}" width="100" height="100"></td>
            <td>
                <a class="edit-btn" data-id="${item.id}"><i class="ti-pencil"></i>Edit</a>
                <a class="delete-btn" data-id="${item.id}"><i class="ti-trash"></i>Delete</a>
            </td>
        `;

            tableBody.appendChild(row);

            const editBtn = row.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () {
                const id = editBtn.getAttribute('data-id');
                console.log("Edit button clicked for ID:" + id);

                fetch(`http://localhost:8181/ibg-infotech/auth/blog-data/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + jwtToken,
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })

                    .then(data => {

                        localStorage.setItem('updateData', JSON.stringify(data));
                        window.location.href = `Update-blog.html`;
                    })

                    .catch(error => {
                        console.error('Error fetching blog data:', error);
                    });
            });

            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                const id = deleteBtn.getAttribute('data-id');
                deleteBlog(id);
            });
        });

    } else {
        console.error('Data received is not an array:', data);
    }
}


// ------------------------------------delete the data------------------------------------------------------

function deleteBlog(id) {

    var jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'JWT token is missing. Please log in again.',
        });
        return;
    }


    fetch(`http://localhost:8181/ibg-infotech/auth/delete-blog/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.text();
        })
        .then(data => {

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Blog has been deleted successfully.',
            }).then(() => {

                location.reload();
            });
        })
        .catch(error => {
            console.error('Error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to delete the blog. Please try again later.',
            });
        });
}


// -------------------------update the data by id----------------------------------


function updateData() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var text = CKEDITOR.instances['editor2'].getData();
    var imageFile1 = document.getElementById('image-input1').files[0];
    var imageFile2 = document.getElementById('image-input2').files[0];
    var imageFile3 = document.getElementById('image-input3').files[0];
    var imageFile4 = document.getElementById('image-input4').files[0];
    var imageFile5 = document.getElementById('image-input5').files[0];
    var jwtToken = localStorage.getItem('jwtToken');

    if (!name || !text) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!jwtToken) {
        alert('JWT token is missing. Please log in again.');
        return;
    }

    var formData = new FormData();
    formData.append('name', name);
    formData.append('text', text);

    if (imageFile1) {
        formData.append('image1', imageFile1);
    }
    if (imageFile2) {
        formData.append('image2', imageFile2);
    }
    if (imageFile3) {
        formData.append('image3', imageFile3);
    }
    if (imageFile4) {
        formData.append('image4', imageFile4);
    }
    if (imageFile5) {
        formData.append('image5', imageFile5);
    }

    // Send the update request to the server
    fetch(`http://localhost:8181/ibg-infotech/auth/update-blog/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + jwtToken,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Handle plain text response
        })
        .then(data => {
            console.log('Server response:', data);
            if (data.includes('updated successfully')) {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Data has been updated successfully.',
                }).then((result) => {
                    window.location.href = 'Blogs.html';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to update data. ' + data,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update data. Please try again.',
            });
        });
}
