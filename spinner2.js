const spinner = (time) => {
  const spin = ['', '|', '/', '-', '\\'];
  let delay = 0;

  for (let i = 1; i <= time; i++) {
    spin.splice(spin.length + 1, 0, spin[i]);
    setTimeout(() => {
      process.stdout.write(`\r${spin[i]} `);
    }, (delay += 400));
  }
};

spinner(15);
