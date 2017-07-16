/** Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
**/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    let count = 0, len = flowerbed.length
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 1) {
            i++
            continue   
        }
        if ((i === 0 || flowerbed[i - 1] === 0) && (i + 1 ===  len || flowerbed[i + 1] === 0)) {
            count++
            i++
            if (count >= n)
                break
         }
    }
    return count >= n
}
