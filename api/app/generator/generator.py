from random import random


def price_generator() -> int:
    movement = -1 if random() < 0.5 else 1
    return movement
