#include <stdio.h>
#include <math.h>

int main() {
    // Variables for input
    double wingspan, wing_area, pitch_speed;
    // Variables for output
    double aspect_ratio, prop_diameter, prop_pitch;

    // Constants
    const double PI = 3.141592653589793;

    // Getting user input
    printf("Enter the wingspan (in inches): ");
    scanf("%lf", &wingspan);
    
    printf("Enter the wing area (in square inches): ");
    scanf("%lf", &wing_area);
    
    printf("Enter the pitch speed (in miles per hour): ");
    scanf("%lf", &pitch_speed);

    // Calculating aspect ratio
    aspect_ratio = (wingspan * wingspan) / wing_area;
    
    // Calculating propeller diameter
    prop_diameter = (2 * sqrt(wing_area)) / sqrt(PI * aspect_ratio);
    
    // Calculating propeller pitch
    prop_pitch = (pitch_speed * 1056) / 16095;

    // Displaying the results
    //printf("\nAspect Ratio: %.2f\n", aspect_ratio);
    printf("Propeller Diameter: %.2f inches\n", prop_diameter);
    printf("Propeller Pitch: %.2f inches\n", prop_pitch);

    return 0;
}
