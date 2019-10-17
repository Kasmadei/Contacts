export const removeDiacritic = (string) => {
  const accents = 'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉĚÊËĘèěéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰŮùűúůûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ';
  const accentsOut = "AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEEeeeÓeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg";
  string = string.split('');
  string.forEach((letter, index) => {
    let i = accents.indexOf(letter);
    if (i !== -1) {
      string[index] = accentsOut[i]
    };
  });

  return string.join('');
};

export const isAlphabeticString = (string) => {
  return /^[a-zA-Z]*$/.test(string);
};
