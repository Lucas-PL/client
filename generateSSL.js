const { exec } = require('child_process');

// Define the OpenSSL commands to generate a private key and a self-signed certificate
const privateKeyCommand = 'openssl genrsa -out private.key 2048';
const csrCommand = 'openssl req -new -key private.key -out localhost.csr -subj "/CN=localhost"';
const certCommand = 'openssl x509 -req -days 365 -in localhost.csr -signkey private.key -out localhost.crt';

// Execute the OpenSSL commands
exec(privateKeyCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error generating private key: ${error}`);
    return;
  }
  console.log(`Private key generated successfully: ${stdout}`);

  exec(csrCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error generating CSR: ${error}`);
      return;
    }
    console.log(`CSR generated successfully: ${stdout}`);

    exec(certCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error generating certificate: ${error}`);
        return;
      }
      console.log(`Certificate generated successfully: ${stdout}`);
      console.log('SSL certificate and private key generated successfully for localhost.');
    });
  });
});
