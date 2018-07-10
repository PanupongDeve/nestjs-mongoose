import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { CatModel } from './cats.model';

@Injectable()
export class CatsService {
   

    async create(catRequest: Cat): Promise<Cat> {
        const catResponse:Cat = await CatModel.create(catRequest);
        return catResponse;
    }


    async findAll(): Promise<Cat[]> {
        const cats:Cat[] = await CatModel.find({});
        return cats;
    }

    async findOne(id: String): Promise<Cat> {
        const cat: Cat = await CatModel.findById(id);
        return cat;
    }

    async updateById(id: String, catRequest: Cat): Promise<Cat> {
        const cat: Cat = await CatModel.findOneAndUpdate(id, catRequest);
        return cat;
    }

    async removeById(id: String): Promise<Cat> {
        const cat: Cat = await CatModel.findByIdAndDelete(id);
        return cat
    }

}