from fastapi import FastAPI, WebSocket
from asyncio import sleep


from app.generator.generator import price_generator
from app.ticket.tickets import Tickets
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/tickets")
async def tickets_list():
    tickets = Tickets()
    list_of_tickets = tickets.get_all()
    return list_of_tickets


@app.websocket("/ws/{ticket_id}")
async def websocket_ticket_changes(websocket: WebSocket, ticket_id):
    await websocket.accept()
    tickets = Tickets()
    price = tickets.get(int(ticket_id))
    while True:
        price += price_generator()
        await websocket.send_text(str(price))
        await sleep(1)
