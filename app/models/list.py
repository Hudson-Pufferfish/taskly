from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class List(db.Model):
    __tablename__ = 'lists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    order = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    board_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('boards.id')), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship('User', back_populates='lists')
    board = db.relationship('Board', back_populates='lists')
    cards = db.relationship(
        "Card", back_populates='list', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'order': self.order,
            'title': self.title,
            'user_id': self.user_id,
            'board_id': self.board_id,
            'cards': [card.to_dict() for card in self.cards]
            # 'created_at': self.created_at
            # 'updated_at': self.updated_at
        }
