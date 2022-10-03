export function printInfo(element) {
  const setCounter = () => {
    counter = count;
    const pageLocation = JSON.stringify(window.opener.location);
    const pageDocument = JSON.stringify(window.opener.document);
    console.log('pageLocation', pageLocation);
    console.log('pageDocument', pageDocument);

    element.innerHTML = `
      <p>pageLocation is ${pageLocation}</p>
      <p>pageDocument is ${pageDocument}</p>
    `;
  };
  element.addEventListener('click', () => setCounter());
}
