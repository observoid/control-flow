
import { Observable } from 'rxjs';

export const enum ExpressionType {
  LITERAL = 'literal',
  OPERATION = 'operation',
  SCOOP_BLOCK = 'scoopBlock',
}

export interface Literal {
  type: ExpressionType.LITERAL;
  literal: string;
}

export interface Operation {
  type: ExpressionType.OPERATION;
  operator: string;
  operands: Observable<Expression>;
}

export interface ScoopBlock {
  type: ExpressionType.SCOOP_BLOCK;
  blockType: string;
  scoops: Observable<Observable<Expression>>;

  hintInfix?: boolean;
}

export type Expression = Literal | Operation | ScoopBlock;
