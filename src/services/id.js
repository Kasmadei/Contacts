export const createId = (normalizedName, contacts) => {
  const id = normalizedName.replace(/ /g, '_').toUpperCase();
  const allIds = contacts.filter(item => {
      const matchedId = /[a-zA-Z_.]+/.exec(item.id);
      if (!Array.isArray(matchedId) || (Array.isArray(matchedId) && matchedId.length !== 1)) {
        throw new Error(`Invalid id: ${item.id}`)
      };

      return matchedId[0] === id;
    }).map(item => item.id);
  if (allIds.length === 0) {
    return id;
  };

  return `${id}-${getMaxSuffix(allIds) + 1}`;
};

const getMaxSuffix = (ids) => {
  const result = ids.map(item => {
    const found = item.match(/(?!-)([0-9]+)$/);

    return Array.isArray(found) && found.length === 2 && parseInt(found[1]);
  }).filter(item => Number.isInteger(item));
  if (result.length === 0) {
    return 0;
  };

  return Math.max(...result);
};
