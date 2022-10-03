# Python Inteview

## Prompt
Our astronaut customers tend to be an international bunch. Because of this, they submit their height measurements a lot of different ways, some of which are metric and imperial. We need to take what they've given us and make sense out of this data.

Finish the `solution` method in the `solution.py` directory to translate heights. The output should be inches as an int. Some helpful hints:

1. You may find both centimeter and inch inputs. Come up with a helpful hueristic to split these numerical entries into groupings of inches and centimeters and translate to inches.
2. You may find 'feet and inches' inputs. Help our data team out and translate these to inches only.
3. Any entries where the value is clearly not able to be translated, return 0 (as an int).
4. Implement a second hueristic to decide when an inch value is too big or too small. For example, we can't fit any astronauts below 48".
5. You may find other data integrity issues, find solutions to deal with these!

Run `pytest` in this directory to test your solution and see if your logic can withstand the data team's requirements.

**You may need to install `pytest` to your virtual environment.**
```bash
pip install pytest
```