/**
 * Build an array of chunks with some specific size
 * 
 * @param {any[]} data - Array used as base to build the chunk
 * @param {number} size - Size of chunk (Default: 4)
 * @returns {any[]} Return a new array chunk with specific size
 * 
 * @example
 * const chunk = buildChunkData([1,2,3,4,5], 3);
 * console.log(chunk); // [[1,2,3], [4,5]]
 */
export const buildChunkData = (data, size = 4) => {
  return data
    .map((_,i) => i % size === 0 ? data.slice(i, i + size) : null)
    .filter((d) => d);
};