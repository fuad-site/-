document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'CV of Omar Mammadli.pdf'; // Dosyanızın adını doğru yazdığınızdan emin olun
    link.download = 'CV of Omar Mammadli.pdf';
    link.click();
});
