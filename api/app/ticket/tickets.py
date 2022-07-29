from random import random


class Tickets:
    def get_all(self):
        all_tickets = []
        for number in range(0, 100):
            ticket = {'value': number, 'label': 'ticket_' + str(number)}
            all_tickets.append(ticket)
        return all_tickets

    def get(self, id=1):
        # to mimic the original tickets generator
        return int(random() * 100) + id

    def save(self, id, value):
        print(id, value)
