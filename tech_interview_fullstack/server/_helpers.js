const getRecommendation = async ({ profile, availableSizes }) => {
  const { height, weight, age, waist } = profile;

  // Check if the profile information is valid
  if (!height || !weight || !age || !waist) {
    return {
      error: 'Missing profile information',
    };
  }

  // Check if the available sizes are in the correct format
  const avail_sizes = availableSizes.join(',').toLowerCase();

  if (avail_sizes.includes('small') || avail_sizes.includes('medium') || avail_sizes.includes('large')) {
    return {
      error: 'Invalid size format, please use S, M, L, XL for available sizes',
    };
  }

  const response = await fetch(`https://api-staging.boldmetrics.io/virtualsizer/get?client_id=bmi&desired_brand=bmi&user_key=fitmatters11!&anon_id=TEST_DEV&locale=us&rec_id=c64d6580-6ee2-11ef-b06e-2fd884a1b912&avail_sizes=${avail_sizes}&oos_sizes=undefined&product_id=Mens%20Nano%20Vest&height=${height}&weight=${weight}&age=${age}&fit=classic&stomach=medium&desired_garment_type=mens_nano_vest_us&waist_circum_preferred=${waist}&application=ssc`);
  const recommendation = await response.json();
  return recommendation;
};

export { getRecommendation };
