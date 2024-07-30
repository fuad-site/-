document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'cv/CV_of_Omar_Mammadli.pdf'; // Make sure the file name is correct
    link.download = 'CV_of_Omar_Mammadli.pdf';
    link.click();
});
