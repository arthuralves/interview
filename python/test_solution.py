from solution import solution

def test_false_string_input():
    output = solution(False)
    assert output == 0

def test_out_of_bounds_input():
    output = solution(6)
    assert output == 0

def test_in_input():
    output = solution(67)
    assert output == 67

def test_in_str_input():
    output = solution("75")
    assert output == 75

def test_cm_input():
    output = solution(189)
    assert output == 74

def test_cm_str_input():
    output = solution("175")
    assert output == 69

def test_empty_str_input():
    output = solution("")
    assert output == 0

def test_str_input():
    output = solution("astronaut")
    assert output == 0

def test_str_input_2():
    output = solution('FALSE')
    assert output == 0

def test_imperial_height_input():
    output = solution("5' 10\"")
    assert output == 70

def test_imperial_height_inputs_2():
    output = solution("6' 4\"")
    assert output == 76

def test_imperial_out_of_bounds_input():
    output = solution("11' 8\"")
    assert output == 0

def test_imperial_out_of_bounds_input_2():
    output = solution("2' 3\"")
    assert output == 0