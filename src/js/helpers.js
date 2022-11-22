export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await fetchPro;
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const randomNumberArray = function (listSize, maxNumber) {
  const numberArray = [];
  for (let i = 0; i < listSize; i++) {
    const randomInt = Math.floor(Math.random() * maxNumber);
    if (!numberArray.includes(randomInt)) numberArray.push(randomInt);
    else i--;
  }
  return numberArray;
};
