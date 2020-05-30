
import { Observable } from 'rxjs';

export const enum ExpressionType {
  LITERAL = 'literal',
  OPERATOR = 'operator',
  SCOOP_BLOCK = 'scoopBlock',
}

export interface Literal {
  type: ExpressionType.LITERAL;
  literal: string;
}

export interface Operator {
  type: ExpressionType.OPERATOR;
  operator: string;
  operands: Observable<Expression>;
}

export interface ScoopBlock {
  type: ExpressionType.SCOOP_BLOCK;
  blockType: string;
  scoops: Observable<Observable<Expression>>;

  hintInfix?: boolean;
}

export type Expression = Literal | Operator | ScoopBlock;
