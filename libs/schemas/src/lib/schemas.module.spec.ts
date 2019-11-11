import { async, TestBed } from '@angular/core/testing';
import { SchemasModule } from './schemas.module';

describe('SchemasModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SchemasModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SchemasModule).toBeDefined();
  });
});
