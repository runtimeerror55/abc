

function shortestPath(tempCoordinates, i, dp, direction) {

    let sum = sumOfCoordinates(tempCoordinates)

    if (dp[sum[0]][sum[1]][direction] != -1) {

        return dp[sum[0]][sum[1]][direction]
    }

    let ans = false
    let x = false

    for (let t = 0; t < 4; t++) {

        if (tempCoordinates[t][0] == mouseCoordinates[0] && tempCoordinates[t][1] == mouseCoordinates[1]) {

            x = true;

            if (currentDpTrueCoordinates === -1 && previous === -1) {

                currentDpTrueCoordinates = tempCoordinates
            }
            else {

                previous = currentDpTrueCoordinates
                currentDpTrueCoordinates = tempCoordinates
            }

            break;
        }

        if (x) {

            break;
        }
    }

    if (x) {

        return true;
    }

    if (i == 4) {

        if (moveTheCoordinates(tempCoordinates, "down", 24)) {

            i = 0;
            tempCoordinates = generateNewCoordinates(tempCoordinates, 1, 0)
            ans = ans || shortestPath(tempCoordinates, i, dp, 2)
            dp[sum[0]][sum[1]][2] = ans;

            if (ans) {
                return true;
            }
        }
        else {

            dp[sum[0]][sum[1]][2] = false
        }
    }
    else {

        if (moveTheCoordinates(tempCoordinates, "left", 0)) {

            let newCoordinates = generateNewCoordinates(tempCoordinates, 0, -1)
            ans = ans || shortestPath(newCoordinates, i + 1, dp, 0)
            dp[sum[0]][sum[1]][0] = ans;

            if (ans) {
                return true;
            }
        }
        else {

            dp[sum[0]][sum[1]][0] = false
        }

        if (moveTheCoordinates(tempCoordinates, "right", 14)) {

            let newCoordinates = generateNewCoordinates(tempCoordinates, 0, 1)
            ans = ans || shortestPath(newCoordinates, i + 1, dp, 1)
            dp[sum[0]][sum[1]][1] = ans;

            if (ans) {
                return true;
            }
        }
        else {
            dp[sum[0]][sum[1]][1] = false
        }

        if (moveTheCoordinates(tempCoordinates, "down", 24)) {

            let newCoordinates = generateNewCoordinates(tempCoordinates, 1, 0)
            ans = ans || shortestPath(newCoordinates, i + 1, dp, 2)
            dp[sum[0]][sum[1]][2] = ans;

            if (ans) {
                return true;
            }
        }
        else {

            dp[sum[0]][sum[1]][2] = false
        }
    }

    return ans;
}
