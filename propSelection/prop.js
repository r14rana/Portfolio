function calculatePropeller() {
    // Get input values
    let wingspan = parseFloat(document.getElementById('wingspan').value);
    let wing_area = parseFloat(document.getElementById('wing_area').value);
    let pitch_speed = parseFloat(document.getElementById('pitch_speed').value);

    // Constants
    const PI = 3.141592653589793;

    // Calculating aspect ratio
    let aspect_ratio = (wingspan * wingspan) / wing_area;

    // Calculating propeller diameter
    let prop_diameter = (2 * Math.sqrt(wing_area)) / Math.sqrt(PI * aspect_ratio);

    // Calculating propeller pitch
    let prop_pitch = (pitch_speed * 1056) / 16095;

    // Display results
    //document.getElementById('aspect_ratio').innerText = `Aspect Ratio: ${aspect_ratio.toFixed(2)}`;
    document.getElementById('prop_diameter').innerText = `Propeller Diameter: ${prop_diameter.toFixed(2)} inches`;
    document.getElementById('prop_pitch').innerText = `Propeller Pitch: ${prop_pitch.toFixed(2)} inches`;
}
