import alternatives from '@/data/alternatives.json';
import Alternative from '@/model/alternative';

export const findAlternativeByName = (name: string) => {
    return alternatives.filter(alternative => alternative.name === name)[0] as Alternative;
}