# Color Matching Game
#### Use the following link to play the game: https://erik-devick.github.io/Color-Guessing-Game/
#### My highscore: 98.17%
<br>

How is score calculated?
1. Let our randomly generated color be the point in 3D space $(R_r,G_r,B_r)$ and our guess be the point $(R_g,G_g,B_g)$, and $R_r,G_r,B_r,R_g,G_g,B_g \in [0,255]$.
2. We can find the Euclidean distance between our points with the following equation:

$$d=\sqrt{(R_r-R_g)^2+(G_r-G_g)^2+(B_r-B_g)^2}$$

3. Since we know the range that all values fall in we can also find the maximum distance as follows:

$$d_{max}=\sqrt{(255-0)^2+(255-0)^2+(255-0)^2}$$
$$d_{max}=\sqrt{255^2+255^2+255^2}$$
$$d_{max}=\sqrt{195075}$$
$$d_{max} \approx 441.67$$

4. Now we can find the similarity percentage with the following formula:

$$similarity = \left( 1-\frac{d}{d_{max}} \right)\cdot 100$$
